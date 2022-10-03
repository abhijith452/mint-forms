const express = require('express');
const axios = require('axios');
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
const { exchangeRates } = require('exchange-rates-api');

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
  priceValidator,

  async (req, res) => {
    try {
      var data = req.body;

      var amountDetails = JSON.parse(req.body.amount);

      if (amountDetails.currency === 'USD') {
        const inr = await axios.get(
          'https://www.frankfurter.app/latest?from=USD&toINR'
        );
        var temp = {
          amount: (amountDetails.amount * inr.data.rates.INR).toFixed(2),
          currency: 'INR',
          conversionRate: inr.data.rates.INR,
        };
        amountDetails = temp;
        data.amount = JSON.stringify(amountDetails);
      }

      var txnId = await generateTxnId(data);
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

      var txnInfo = {
        currency: 'INR',
        txnAmount: amountDetails.amount,
        orderId: txnId.orderId,
        txnDate: moment().tz('Asia/Kolkata').toISOString(),
        paymentProvider: 'paytm',
      };

      const formDetails = await Form.findOne({ formId: req.query.formId });
      if (req.query.formId === 'indicon2022') {
        notify('conPending', req.body, txnInfo, formDetails);
      } else {
        notify('pending', req.body, txnInfo, formDetails);
      }
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

      var txnInfo = {
        txnAmount: req.body.TXNAMOUNT,
        orderId: req.body.ORDERID,
        txnDate: moment().tz('Asia/Kolkata').toISOString(),
        txnId: req.body.TXNID,
        currency: req.body.CURRENCY,
      };

      const formDetails = await Form.findOne({ formId: response.formId });
      notify('conSuccess', response, txnInfo, formDetails);

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

      var txnInfo = {
        txnAmount: req.body.TXNAMOUNT,
        orderId: req.body.ORDERID,
        txnDate: moment().tz('Asia/Kolkata').toISOString(),
        txnId: req.body.TXNID,
        currency: req.body.CURRENCY,
      };
      const formDetails = await Form.findOne({ formId: response.formId });

      notify('conFailed', response, txnInfo, formDetails);
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
