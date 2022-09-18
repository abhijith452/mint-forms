const Paytm = require('paytm-pg-node-sdk');
const logger = require('../utils/logger');

const checkOrderPaytm = async (req, res, next) => {
  try {
    var paymentStatusDetailBuilder = new Paytm.PaymentStatusDetailBuilder(
      req.query.orderId
    );
    var paymentStatusDetail = paymentStatusDetailBuilder
      .setReadTimeout(8000)
      .build();
    var paytm = await Paytm.Payment.getPaymentStatus(paymentStatusDetail);

    if (
      paytm.responseObject.body.resultInfo.resultMsg === 'Invalid Order Id.'
    ) {
      return res.status(400).send({ error: 'Invalid OrderID' });
    }
    if (paytm.responseObject.body.resultInfo.resultStatus != 'TXN_SUCCESS') {
      return next();
    } else {
      return res.status(400).send({ error: 'Payment already made' });
    }
  } catch (err) {
    logger.error(err);
    return res.status(400).send({ error: err.message });
 
  }
};

module.exports = checkOrderPaytm;
