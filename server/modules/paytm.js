const logger = require('../utils/logger');
const Paytm = require('paytm-pg-node-sdk');
const generateRandomString = require('../utils/generateRandomString');

function connectToPaytm() {
  try {
    var env =
      process.env.NEXT_PUBLIC_ENV === 'production'
        ? Paytm.LibraryConstants.PRODUCTION_ENVIRONMENT
        : Paytm.LibraryConstants.STAGING_ENVIRONMENT;
    var mid = process.env.Merchant_Id;
    var key = process.env.Merchant_Key;
    var website = process.env.Website;
    var client_id = process.env.client_id;
    var callbackUrl = process.env.Callback;
    Paytm.MerchantProperties.setCallbackUrl(callbackUrl);
    Paytm.MerchantProperties.initialize(env, mid, key, client_id, website);
    // Paytm.MerchantProperties.setConnectionTimeout(5);

    logger.info(`> Connected to Paytm Servers`);
    return;
  } catch (e) {
    logger.error('Exception caught: ', e);
    Paytm.LoggingUtil.addLog(
      Paytm.LoggingUtil.LogLevel.INFO,
      'DemoApp',
      'Exception caught: ',
      e
    );
    logger.error('Failed');
    return err;
  }
}
const generateTxnId = async (req) => {
  try {
    var txnInfo = JSON.parse(req.amount)
    var channelId = Paytm.EChannelId.WEB;
    var orderId = generateRandomString(10);
    var txnAmount = Paytm.Money.constructWithCurrencyAndValue(
      txnInfo.currency,
      txnInfo.amount
    );
    var userInfo = new Paytm.UserInfo(generateRandomString(10));
    userInfo.setEmail(req.email);
    userInfo.setFirstName(req.name);
    // userInfo.setLastName(req.lastName);
    userInfo.setMobile(req.phone);
    var paymentDetailBuilder = new Paytm.PaymentDetailBuilder(
      channelId,
      orderId,
      txnAmount,
      userInfo
    );
    var paymentDetail = paymentDetailBuilder.build();
    var response = await Paytm.Payment.createTxnToken(paymentDetail);

    var details = {
      mid: process.env.Merchant_Id,
      orderId,
      CHECKSUMHASH: response.responseObject.head.signature,
      txnToken: response.responseObject.body.txnToken,
      TXN_AMOUNT: String(JSON.parse(req.amount).amount),
      WEBSITE: 'WEBSTAGING',
    };

    logger.info(`> Paytm token created for ${req.name}`);

    return details;
  } catch (err) {
    logger.error(err);
    return err;
  }
};

const reinitateTxnId = async (req) => {
  try {
    var channelId = Paytm.EChannelId.WEB;
    var orderId = req.orderId;
    var txnAmount = Paytm.Money.constructWithCurrencyAndValue(
      Paytm.EnumCurrency.INR,
      String(JSON.parse(req.amount).amount)
    );
    var userInfo = new Paytm.UserInfo(generateRandomString(10));
    userInfo.setEmail(req.email);
    userInfo.setFirstName(req.name);
    userInfo.setMobile(req.phone);
    var paymentDetailBuilder = new Paytm.PaymentDetailBuilder(
      channelId,
      orderId,
      txnAmount,
      userInfo
    );
    var paymentDetail = paymentDetailBuilder.build();
    var response = await Paytm.Payment.createTxnToken(paymentDetail);

    var details = {
      mid: process.env.Merchant_Id,
      orderId,
      CHECKSUMHASH: response.responseObject.head.signature,
      txnToken: response.responseObject.body.txnToken,
      TXN_AMOUNT: String(JSON.parse(req.amount).amount),
      WEBSITE: 'WEBSTAGING',
    };

    logger.info(`> Paytm token created for ${req.name}`);

    return details;
  } catch (err) {
    logger.error(err);
    return err;
  }
};
module.exports = { connectToPaytm, generateTxnId, reinitateTxnId };
// String(JSON.parse(req.body.amount).amount)+".00"
