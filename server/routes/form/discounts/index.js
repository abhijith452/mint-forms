const express = require('express');
const router = express.Router();
const logger = require('../../../utils/logger');
const Form = require('../../../models/forms')

router.get("/", async (req, res) => {
    try {
        const responses = await Form.findOne({ formId: req.query.formId }, { pricing: true, specific: true })
        res.send(responses)
    }
    catch (err) {
        res.status(400).send({ error: err.message })
        logger.error(err)
    }


});

router.put("/", async (req, res) => {
    try {
        const responses = await Form.findOneAndUpdate({ formId: req.query.formId }, {
            "$set": {
                [`pricing.${req.body.code}`]: {
                    description: "",
                    expiryDate: null,
                    packages: [
                        {
                            label: `IEEE Member - Rs ${req.body.ieee} + 18% GST`,
                            "amount": Number(req.body.ieee) + Number(req.body.ieee) * 0.18
                        },
                        {
                            "label": `Non IEEE members Academic ${req.body.acadmic} + 18% GST`,
                            "amount": Number(req.body.acadmic) + Number(req.body.acadmic) * 0.18
                        },
                        {
                            "label": `Non IEEE members Industry ${req.body.industry} + 18% GST`,
                            "amount": Number(req.body.industry) + Number(req.body.industry) * 0.18
                        }
                    ],
                },
                [`specific.${req.body.code}`]: req.body.specific
            }

        })
        res.send(responses)
    }
    catch (err) {
        res.status(400).send({ error: err.message })
        logger.error(err)
    }


});
router.post("/create", async (req, res) => {
    try {
        const response = await Form.findOneAndUpdate({ formId: req.query.formId }, {
            "$set": {
                [`pricing.${req.body.code}`]: {
                    description: "",
                    expiryDate: null,
                    packages: [
                        {
                            label: `IEEE Member - Rs ${req.body.ieee} + 18% GST`,
                            "amount": Number(req.body.ieee) + Number(req.body.ieee) * 0.18
                        },
                        {
                            "label": `Non IEEE members Academic ${req.body.acadmic} + 18% GST`,
                            "amount": Number(req.body.acadmic) + Number(req.body.acadmic) * 0.18
                        },
                        {
                            "label": `Non IEEE members Industry ${req.body.industry} + 18% GST`,
                            "amount": Number(req.body.industry) + Number(req.body.industry) * 0.18
                        }
                    ],
                },
                [`specific.${req.body.code}`]: req.body.specific

            }
        })
        response.save()
            .then(() => res.sendStatus(201))
            .catch((err) => {
                logger.error(err)
                res.status(400).send({ error: err.message })
            })

    }
    catch (err) {
        res.status(400).send({ error: err.message })
        logger.error(err)
    }


});

module.exports = router;