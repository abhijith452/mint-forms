const express = require('express');
const logger = require('../../utils/logger');
const router = express.Router();
const razorPayRoutes = require('./razorpayRoutes');
const paytmRoutes = require('./paytmRoutes');
const Response = require('../../models/response');
const Form = require('../../models/forms');
const notify = require('./notify');
const conSuccess = require('../../mailTemplates/conferenceSuccess');
const moment = require('moment');
const getIndiconPrice = require('../../../utils/getIndiconPrice');
const { getPaperPrice } = require('../../../utils/getPaperPrice');
const { getExtraPagesPrice } = require('../../../utils/getExtraPagesPrice');


router.use('/razorpay', razorPayRoutes);
router.use('/paytm', paytmRoutes);
router.get('/html', async (req, res) => {
  try {
    const response = await Response.findOne({ orderId: '44ZHW9SXOD' });
    const formDetails = await Form.findOne({ orderId: response.formId });
    res.send(
      conSuccess({
        name: response.name,
        orderId: response.orderId,
        amount: JSON.parse(response.amount).amount,
        paymentStatus: 'success',
        txnDate: moment(response.txnDate),
        txnId: response.txnId,
        email: response.email,
        phone: response.phone,
        banner:
          process.env.NODE_ENV === 'development'
            ? `http://localhost:3000/form%20banners/${formDetails.banner}`
            : `${process.env.domain}/form%20banners/${formDetails.banner}`,
        title: formDetails.title,
        venue: formDetails.venue,
        eventDate: moment(formDetails.eventDate),
        currency: JSON.parse(response.amount).currency,
        domain: process.env.domain,
        fee: getIndiconPrice(response),
        additionalPapers:getPaperPrice(response),
        extraPages:getExtraPagesPrice(response),
        papers:response.papers,
        category:response.category,
        numOfExtraPage: `${ str2num(response.extraPage1) +
          str2num(response.extraPage2) +
          str2num(response.extraPage3)}`
      })
    );
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(err);
  }
});
router.get('/confirmation', async (req, res) => {
  try {
    const response = await Response.findOne(
      { orderId: req.query.orderId },
      {
        paymentStatus: 1,
        txnDate: 1,
        orderId: 1,
        amount: 1,
        formId: 1,
      }
    );
    if (response === null) {
      return res.status(400).send({ error: 'Invalid order ID' });
    }

    const formDetails = await Form.findOne(
      { formId: response.formId },
      {
        formId: 1,
        title: 1,
        venue: 1,
        eventDate: 1,
      }
    );
    formDetails.responses = [response];
    return res.send(formDetails);
  } catch (err) {
    res.status(400).send({ error: err.message });
    logger.error(err);
  }
});

module.exports = router;
