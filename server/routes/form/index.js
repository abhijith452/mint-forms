const express = require('express');
const logger = require('../../utils/logger');
const router = express.Router();
const sendMail = require('./sendMail');
const pendingTemplate = require('../../mailTemplates/registerPending');
const successTemplate = require('../../mailTemplates/registerSuccess');
const Form = require('../../models/forms');
const discountRoutes = require('./discounts');
const generateRandomString = require('../../utils/generateRandomString');
const Responses = require('../../models/response');
// const fs = require("fs");
// const PDFDocument = require("pdfkit");

// router.get("/discounts", discountRoutes);

// router.post("/create", async (req, res) => {
//   try {
//     const response = await new Form({
//       formId: generateRandomString(6),
//       title: req.body.title,
//       description: "",
//       responses: [],
//       venue: req.body.venue,
//       eventDate: req.body.eventDate,
//       banner: req.body.banner,
//     });
//     response
//       .save()
//       .then(() => res.sendStatus(200))
//       .catch((err) => {
//         logger.error(err);
//         res.status(400).send({ error: err.message });
//       });
//   } catch (err) {
//     logger.error(err);
//     res.status(400).send({ error: err.message });
//   }
// });

router.get('/responses', async (req, res) => {
  try {
    // const applicants = await Applicant.find({})
    const responses = await Responses.find({ formId: req.query.formId });
    const formDetails = await Form.findOne({ formId: req.query.formId });
    formDetails.responses = responses;
    res.send(formDetails);
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

router.post('/mail', async (req, res) => {
  try {
    var emailIds = req.body.to.split(',');
    sendMail(emailIds, req.body.subject, req.body.msg);
    res.sendStatus(200);
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

router.post('/mail/reminder', async (req, res) => {
  try {
    const response = await Responses.find({ formId: req.query.formId });
    const formDetails = await Form.findOne({ formId: req.query.formId });
    response.forEach((applicant) => {
      if (applicant.paymentStatus === 'pending') {
        sendMail(
          applicant.email,
          `${formDetails.title} | Registration pending`,
          pendingTemplate({
            name: applicant.name,
            orderId: applicant.orderId,
            amount: JSON.parse(applicant.amount).amount * 100,
            paymentStatus: 'pending',
            txnDate:
              applicant.timeStamp !== undefined
                ? applicant.timeStamp
                : new Date(),
            email: applicant.email,
            phone: applicant.phone,
            banner:
              process.env.NODE_ENV === 'development'
                ? `http://localhost:3000/form%20banners/${response.banner}`
                : `https://forms.ieee-mint.org/form%20banners/${response.banner}`,
            title: formDetails.title,
            venue: formDetails.venue,
            eventDate: formDetails.eventDate,
            formId: formDetails.formId,
            currency: JSON.parse(applicant.amount).currency,
            domain: process.env.domain,
          })
        );
      }
    });

    res.sendStatus(200);
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

router.delete('/response', async (req, res) => {
  try {
    await Responses.deleteOne({ orderId: req.query.orderId });
    res.sendStatus(201);
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

router.get('/pricing', async (req, res) => {
  try {
    const response = await Form.findOne({ formId: req.query.formId });
    res.send({
      pricing: response.pricing,
      members: response.members,
      specific: response.specific,
    });
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;
