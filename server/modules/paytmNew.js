const PaytmChecksum = require('PaytmChecksum');
const axios = require('axios');
const logger = require('../utils/logger');
const generateRandomString = require('../utils/generateRandomString');

async function generateTxn2(data) {
  try {
    var txnInfo = JSON.parse(data.amount);
    var paytmParams = {head: {},body: {} };
    paytmParams.body = {
      requestType: 'Payment',
      mid: process.env.Merchant_Id,
      websiteName: process.env.Website,
      orderId: generateRandomString(10),
      callbackUrl: process.env.Callback,
      txnAmount: {
        value: txnInfo.amount,
        currency: txnInfo.currency,
      },
      userInfo: {
        custId: generateRandomString(10),
      },
      splitSettlementInfo:{
        splitMethod:"AMOUNT",
        splitInfo:{
          mid:"onOGDTsm383921763269",
          partnerId:"MNITJAIPUR01",
          amount:{
            value: "400.00",
            currency: "INR",
          }
        }
      }
    };

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.Merchant_Key
    );
    paytmParams.head = {
      signature: checksum,
    };

    var res = await axios.post(
      `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${process.env.Merchant_Id}&orderId=${paytmParams.body.orderId}`,
      paytmParams
    );
    // logger.info(`> Paytm token created for `);
  //  console.log(res.data)
    var details = {
      mid: process.env.Merchant_Id,
      orderId: paytmParams.body.orderId,
      CHECKSUMHASH: res.data.head.signature,
      txnToken: res.data.body.txnToken,
      TXN_AMOUNT: txnInfo.amount,
      WEBSITE: 'WEBSTAGING',
    };
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { generateTxn2 };
