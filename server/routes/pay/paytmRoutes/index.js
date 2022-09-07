const express = require('express');
const Paytm = require('paytm-pg-node-sdk');
const logger = require('../../../utils/logger');
const { generateTxnId } = require('../../../modules/paytm');
const router = express.Router();
const multer = require('multer');
const Response = require('../../../models/response');
const Form = require('../../../models/forms');
const notify = require('../notify');
const generateRandomString = require('../../../utils/generateRandomString');
const moment = require('moment');

const validate = require('../../../middleware/validateResponse');
const responseSchema = require('../../../validations/responseValidation');
const priceValidator = require('../../../middleware/priceValidator');

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
      var txnId = await generateTxnId(req);
      var amountDetails = JSON.parse(req.body.amount);
      const response = await new Response({
        formId: req.query.formId,
        responseId: generateRandomString(10),
        orderId: txnId.orderId,
        paymentStatus: amountDetails.amount === 0 ? 'success' : 'pending',
        txnDate:
          amountDetails.amount === 0 ? new Date().toISOString() : 'pending',
        txnId: amountDetails.amount === 0 ? txnId.CHECKSUMHASH : 'pending',
        ...req.body,
        ...(req.file !== undefined &&
          req.file.path !== undefined && { fileUpload: req.file.path }),
      });

      // const formDetails = await Form.findOne({ formId: req.query.formId });

      // const orderDetails = {
      //   id: txnId.orderId,
      //   amount: txnId.TXN_AMOUNT,
      //   currency: 'INR',
      //   created_at:  moment().unix(),
      // };

      // notify('pending', orderDetails, req.body, formDetails);

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
  console.log(`${process.env.domain}confirmation/${req.body.ORDERID}`)
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

    console.log(paytm.responseObject.body.resultInfo.resultStatus);
    if (
      paytm.responseObject.body.resultInfo.resultStatus === 'TXN_SUCCESS'
    ) {
      const response = await Response.findOneAndUpdate(
        { orderId: req.body.ORDERID },
        {
          $set: {
            paymentStatus: 'success',
            txnDate: moment(req.body.TXNDATE).toISOString(),
            txnId: req.body.TXNID,
          },
        }
      );

      var data = {
        txnAmount: req.body.TXNAMOUNT,
        orderId: req.body.ORDERID,
        txnDate: moment(req.body.TXNDATE).toISOString(),
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
      console.log(paytm.responseObject.body.txnDate)
      const response = await Response.findOneAndUpdate(
        { orderId: req.body.ORDERID },
        {
          $set: {
            paymentStatus: 'failure',
            txnDate: moment(paytm.responseObject.body.txnDate).toISOString(),
            txnId: req.body.TXNID,
          },
        }
      );
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

module.exports = router;
