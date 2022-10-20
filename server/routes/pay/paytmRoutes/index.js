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
const { generateTxn2 } = require('../../../modules/paytmNew');

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './files');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

router.post('/transfer', upload.single('fileUpload'), async (req, res) => {
  try {
    var splitInfo = {
      method: 'AMOUNT',
      acc: [
        {
          mid: req.body.accountId,
          partnerId: req.body.partnerId,
        },
      ],
    };
    // var data = req.body;
    // data.amount = JSON.stringify(req.body.amount);
    var txnId = await generateTxn2(req.body, splitInfo);
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
          usd: amountDetails.amount,
          fee: (amountDetails.fee * inr.data.rates.INR).toFixed(2),
          ownerAmt: (amountDetails.ownerAmt * inr.data.rates.INR).toFixed(2),
          amount: (amountDetails.amount * inr.data.rates.INR).toFixed(2),
          currency: 'INR',
          conversionRate: inr.data.rates.INR,
        };
        amountDetails = temp;
        data.amount = JSON.stringify(amountDetails);
      }
      const formDetails = await Form.findOne({ formId: req.query.formId });

      // var txnId = await generateTxnId(data);
      var txnId = await generateTxn2(data, formDetails.splitInfo);
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

      // if (req.query.formId === 'indicon2022') {
      //   notify('conPending', req.body, txnInfo, formDetails);
      // } else {
      //   notify('pending', req.body, txnInfo, formDetails);
      // }
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
router.post('/webhook', async (req, res) => {
  try {
    logger.info(JSON.stringify(req.body));
    // await axios.post("https://eo5z9welnk8y4gr.m.pipedream.net",req.body)
    // console.log(req.body)
    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err);
    logger.error(err);
  }
});
router.get('/orderStatus', async (req, res) => {
  try {
    var paymentStatusDetailBuilder = new Paytm.PaymentStatusDetailBuilder(
      req.query.orderId
    );
    var paymentStatusDetail = paymentStatusDetailBuilder
      .setReadTimeout(8000)
      .build();
    var paytm = await Paytm.Payment.getPaymentStatus(paymentStatusDetail);

   
    res.send(paytm);
  } catch (err) {
    res.status(400).send(err);
    logger.error(err);
  }
});
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

      if (req.query.formId === 'indicon2022') {
        notify('conSuccess', response, txnInfo, formDetails);
      } else if (req.query.formId !== 'transfer') {
        notify('success', response, txnInfo, formDetails);
      }

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
      if (req.query.formId === 'indicon2022') {
        notify('conFailed', response, txnInfo, formDetails);
      } else {
        notify('failed', response, txnInfo, formDetails);
      }

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

router.post('/confirmation', async (req, res) => {
  try {
    const applicant = await Response.findOne({
      orderId: req.query.orderId,
    });
    var amt = JSON.parse(applicant.amount);

    var txnInfo = {
      txnAmount: amt.amount,
      orderId: applicant.orderId,
      txnDate: applicant.txnDate,
      txnId: applicant.txnId,
      currency: amt.currency,
    };

    const formDetails = await Form.findOne({ formId: applicant.formId });

    if (req.query.formId === 'indicon2022') {
      notify('conSuccess', applicant, txnInfo, formDetails);
    } else {
      notify('success', applicant, txnInfo, formDetails);
    }
    res.sendStatus(201);
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(err);
  }
});

// router.get('/reinitiate', checkOrderPaytm, async (req, res) => {
//   try {
//     const applicant = await Response.findOne({
//       orderId: req.query.orderId,
//     });
//     var txnId = await generateTxnId(applicant);
//     const response = await Response.findOneAndUpdate(
//       { orderId: req.query.orderId },
//       { orderId: txnId.orderId }
//     );
//     if (response === null) {
//       return res.status(400).send({ error: 'Invalid order ID' });
//     }
//     response
//       .save()
//       .then(() => res.send(txnId))
//       .catch((err) => {
//         logger.error(err);
//         res.status(400).send({ error: err.message });
//       });
//   } catch (err) {
//     res.status(400).send({ error: err.message });
//     logger.error(err);
//   }
// });

module.exports = router;
