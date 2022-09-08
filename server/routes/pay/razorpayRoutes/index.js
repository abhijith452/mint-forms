const moment = require('moment');
const express = require('express');
var crypto = require('crypto');
const Razorpay = require('razorpay');
const multer = require('multer');

require('dotenv').config();
const generateRandomString = require('../../../utils/generateRandomString');
const addDataGoogleSheets = require('../../../utils/addDataGoogleSheets');
const notify = require('../notify');
const Response = require('../../../models/response');
const Form = require('../../../models/forms');
const logger = require('../../../utils/logger');
const router = express.Router();

const validate = require('../../../middleware/validateResponse');
const responseSchema = require('../../../validations/responseValidation');
const priceValidator = require('../../../middleware/priceValidator');

var instance = new Razorpay({
  key_id: process.env.razorPayId,
  key_secret: process.env.razorPaySecret,
});

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './files');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

router.post(
  '/',
  upload.single('fileUpload'),
  validate(responseSchema),
  priceValidator,
  async (req, res) => {
    try {
      var amountDetails = JSON.parse(req.body.amount);

      var order = await instance.orders.create({
        amount: amountDetails.amount * 100,
        currency: amountDetails.currency,
      });

      const response = await new Response({
        formId: req.query.formId,
        responseId: generateRandomString(10),
        orderId: order.id,
        paymentStatus: amountDetails.amount === 0 ? 'success' : 'pending',
        txnDate: amountDetails.amount === 0 ? order.txnDate : 'pending',
        txnId: amountDetails.amount === 0 ? order.txnId : 'pending',
        ...req.body,
        ...(req.file !== undefined &&
          req.file.path !== undefined && { fileUpload: req.file.path }),
      });

      const orderDetails = {
        id: order.id,
        amount: order.amount / 100,
        currency: order.currency,
        created_at: order.created_at,
      };

      const formDetails = await Form.findOne({ formId: req.query.formId });

      notify('pending', orderDetails, req.body, formDetails);
      logger.info(`> Razor token created for ${req.body.name}`);

      response
        .save()
        .then(() => res.send(order))
        .catch((err) => {
          logger.error(err);
          res.status(400).send({ error: err.message });
        });
    } catch (err) {
      console.log(err);
      logger.error(err);
      return res.status(400).send(err);
    }
  }
);

router.get('/orderDetails', async (req, res) => {
  try {
    const orderDetails = await instance.orders.fetch(req.query.orderId);
    const applicant = await Response.findOne({ orderId: req.query.orderId });
    logger.info(
      `> Reinitated payment for ${applicant.name} orderId : ${req.query.orderId}`
    );
    orderDetails.key = process.env.razorPayId;
    orderDetails.userDetails = {
      name: applicant.name,
      email: applicant.email,
      phone: applicant.phone,
    };
    res.send(orderDetails);
  } catch (err) {
    logger.error(err);
    res.status(400).send(err);
  }
});

router.post('/verify', async (req, res) => {
  try {
    let body = req.body.razorpay_order_id + '|' + req.body.razorpay_payment_id;
    var expectedSignature = crypto
      .createHmac('sha256', process.env.razorPaySecret)
      .update(body.toString())
      .digest('hex');

    const orderDetails = await instance.orders.fetch(
      req.body.razorpay_order_id
    );
    if (expectedSignature === req.body.razorpay_signature) {
      const response = await Response.findOneAndUpdate(
        { orderId: req.query.orderId },
        {
          $set: {
            paymentStatus: 'success',
            txnDate: moment.unix(orderDetails.created_at).toISOString(),
            txnId: req.body.razorpay_payment_id,
          },
        }
      );

      var data = {
        txnAmount: orderDetails.amount_paid / 100,
        orderId: req.body.razorpay_order_id,
        txnDate: moment.unix(orderDetails.created_at).toISOString(),
        txnId: req.body.razorpay_payment_id,
        currency: orderDetails.currency,
      };
      console.log(data.currency)

      const formDetails = await Form.findOne({ formId: req.query.formId });
      notify('success', data, response, formDetails);
      response
        .save()
        .then(() => res.sendStatus(200))
        .catch((err) => {
          logger.error(err);
          res.status(400).send({ error: err.message });
        });
    } else {
      res.status(400).send({ error: 'Cannot verify signature' });
    }
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

router.post('/failed', async (req, res) => {
  try {
    const orderDetails = await instance.orders.fetch(
      req.body.metadata.order_id
    );
    var data = {
      txnAmount: orderDetails.amount_paid,
      orderId: req.body.metadata.order_id,
      txnDate: moment.unix(orderDetails.created_at).toISOString(),
    };

    const response = await Response.findOneAndUpdate(
      {
        orderId: req.body.metadata.order_id,
      },
      {
        $set: {
          paymentStatus: 'failed',
          txnDate: moment.unix(orderDetails.created_at).toISOString(),
          txnId: 'failed',
        },
      }
    );
    const formDetails = await Form.findOne({ formId: req.query.formId });
    notify('failed', data, response, formDetails);

    response
      .save()
      .then(() => res.sendStatus(200))
      .catch((err) => {
        logger.error(err);
        res.status(400).send({ error: err.message });
      });
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
