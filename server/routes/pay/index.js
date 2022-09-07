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

// router.get('/reinitiate', async (req, res) => {
//   try {
//     if (req.query.paymentProvider==="razorpay") {
//       const orderDetails = await instance.orders.fetch(req.query.orderId);
//       const applicant = await Response.findOne({ orderId: req.query.orderId });
//       logger.info(
//         `> Reinitated payment for ${applicant.name} orderId : ${req.query.orderId}`
//       );
//       orderDetails.key = process.env.razorPayId;
//       orderDetails.userDetails = {
//         name: applicant.name,
//         email: applicant.email,
//         phone: applicant.phone,
//       };
//       res.send(orderDetails);
//     }
//     else{

//     }
//   } catch (err) {
//     res.status(400).send({ error: err.message });
//     logger.error(err);
//   }
// });

module.exports = router;
