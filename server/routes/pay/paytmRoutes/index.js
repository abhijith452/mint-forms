const express = require('express');
const Paytm = require('paytm-pg-node-sdk');
const logger = require('../../../utils/logger');
const { reinitateTxnId, generateTxnId } = require('../../../modules/paytm');
const router = express.Router();
const multer = require('multer');
const Response = require('../../../models/response');
const Form = require('../../../models/forms');
const notify = require('../notify');
const generateRandomString = require('../../../utils/generateRandomString');
const moment = require('moment-timezone');
const validate = require('../../../middleware/validateResponse');
const responseSchema = require('../../../validations/responseValidation');
const priceValidator = require('../../../middleware/priceValidator');
const checkOrderPaytm = require('../../../middleware/checkOrderPaytm');

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
      var txnId = await generateTxnId(req.body);
      var amountDetails = JSON.parse(req.body.amount);
      const response = await new Response({
        formId: req.query.formId,
        responseId: generateRandomString(10),
        orderId: txnId.orderId,
        paymentStatus: 'pending',
        txnDate: 'pending',
        txnId: 'pending',
        ...req.body,
        ...(req.file !== undefined &&
          req.file.path !== undefined && { fileUpload: req.file.path }),
      });

      var data = {
        currency: amountDetails.currency,
        txnAmount: amountDetails.amount,
        orderId: txnId.orderId,
        txnDate: moment().tz('Asia/Kolkata').toISOString(),
        paymentProvider: 'paytm',
      };

      const formDetails = await Form.findOne({ formId: req.query.formId });
      notify('pending', data, response, formDetails);
      response
        .save()
        .then(() => res.send(txnId))
        .catch((err) => {
          logger.error(err);
          res.status(400).send({ error: err.message });
        });
    } catch (err) {
      logger.error(err);
      return res.status(400).send(err);
    }
  }
);

router.post('/callback', async (req, res) => {
  try {
    var orderId = req.body.ORDERID;
    var readTimeout = 80000;
    var paymentStatusDetailBuilder = new Paytm.PaymentStatusDetailBuilder(
      orderId
    );
    var paymentStatusDetail = paymentStatusDetailBuilder
      .setReadTimeout(readTimeout)
      .build();
    var paytm = await Paytm.Payment.getPaymentStatus(paymentStatusDetail);

    if (paytm.responseObject.body.resultInfo.resultStatus === 'TXN_SUCCESS') {
      const response = await Response.findOneAndUpdate(
        { orderId: req.body.ORDERID },
        {
          $set: {
            paymentStatus: 'success',
            txnDate: moment().tz('Asia/Kolkata').toISOString(),
            txnId: req.body.TXNID,
          },
        }
      );

      var data = {
        txnAmount: req.body.TXNAMOUNT,
        orderId: req.body.ORDERID,
        txnDate: moment().tz('Asia/Kolkata').toISOString(),
        txnId: req.body.TXNID,
      };

      const formDetails = await Form.findOne({ formId: response.formId });
      notify('success', data, response, formDetails);

      response
        .save()
        .then(() =>
          res.redirect(`${process.env.domain}confirmation/${req.body.ORDERID}`)
        )
        .catch((err) => {
          logger.error(err);
          res.status(400).send({ error: err.message });
        });
    } else if (
      paytm.responseObject.body.resultInfo.resultStatus === 'TXN_FAILURE'
    ) {
      const response = await Response.findOneAndUpdate(
        { orderId: req.body.ORDERID },
        {
          $set: {
            paymentStatus: 'failure',
            txnDate: moment().tz('Asia/Kolkata').toISOString(),
            txnId: req.body.TXNID,
          },
        }
      );
      var data = {
        txnAmount: req.body.TXNAMOUNT,
        orderId: req.body.ORDERID,
        txnDate: moment().toISOString(),
      };
      const formDetails = await Form.findOne({ formId: response.formId });

      notify('failed', data, response, formDetails);
      response
        .save()
        .then(() =>
          res.redirect(`${process.env.domain}confirmation/${req.body.ORDERID}`)
        )
        .catch((err) => {
          logger.error(err);
          res.status(400).send({ error: err.message });
        });
    } else {
      return res.redirect(
        `${process.env.domain}confirmation/${req.body.ORDERID}`
      );
    }
  } catch (err) {
    res.status(400).send(err);
    logger.error(err);
  }
});

router.get('/reinitiate', checkOrderPaytm, async (req, res) => {
  try {
    const applicant = await Response.findOne({
      orderId: req.query.orderId,
    });
    var txnId = await generateTxnId(applicant);
    const response = await Response.findOneAndUpdate(
      { orderId: req.query.orderId },
      { orderId: txnId.orderId }
    );
    if (response === null) {
      return res.status(400).send({ error: 'Invalid order ID' });
    }
    response
      .save()
      .then(() => res.send(txnId))
      .catch((err) => {
        logger.error(err);
        res.status(400).send({ error: err.message });
      });
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(err);
  }
});

module.exports = router;
