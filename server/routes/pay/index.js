const express = require('express');
const logger = require('../../utils/logger');
const router = express.Router();
const razorPayRoutes = require('./razorpayRoutes');
const paytmRoutes = require('./paytmRoutes');
const Response = require('../../models/response');
const Form = require('../../models/forms');

router.use('/razorpay', razorPayRoutes);
router.use('/paytm', paytmRoutes);

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
    if(response===null){
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
