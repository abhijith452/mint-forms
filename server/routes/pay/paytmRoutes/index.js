const express = require('express')
const Paytm = require('paytm-pg-node-sdk');
const logger = require('../../../utils/logger');
const { generateTxnId } = require('../../../modules/paytm');
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        var txnId = await generateTxnId(req)
        console.log(txnId)
        res.send(txnId)
    }
    catch (err) {
        logger.error(err)
        return res.status(400).send(err);
    }
})

router.post("/callback", async (req, res) => {

    try {
        var orderId = req.body.ORDERID;
        var readTimeout = 80000;
        var paymentStatusDetailBuilder = new Paytm.PaymentStatusDetailBuilder(orderId);
        var paymentStatusDetail = paymentStatusDetailBuilder.setReadTimeout(readTimeout).build();
        var response = await Paytm.Payment.getPaymentStatus(paymentStatusDetail);

        if (response.responseObject.body.resultInfo.resultStatus === "TXN_SUCCESS") {

            return res.redirect(process.env.NODE_ENV === "production" ? `https://ieee-mint.org/confirmation/jobfair/${req.body.ORDERID}` : `http://localhost:3001/confirmation/jobfair/${req.body.ORDERID}`)

        }
        else {
        
            return res.redirect(process.env.NODE_ENV === "production" ? `https://ieee-mint.org/confirmation/jobfair/${req.body.ORDERID}` : `http://localhost:3001/confirmation/jobfair/${req.body.ORDERID}`)
        }

    }
    catch (err) {
        res.status(400).send(err)
        logger.error(err)
    }

})

module.exports = router;
