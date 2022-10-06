const PaytmChecksum = require('paytmchecksum');
const axios = require('axios');
const logger = require('../utils/logger');
const generateRandomString = require('../utils/generateRandomString');

var slipInfoGen = (val, ownerSplit, total) => {
  var arr = [];
  if (val.method === 'AMOUNT') {
    val.acc.forEach((acc, key) => {
      if (key === 0) {
        arr.push({
          mid: acc.mid,
          partnerId: acc.partnerId,
          amount: { value: ownerSplit, currency: 'INR' },
        });
      }
      if (key === 1) {
        arr.push({
          mid: acc.mid,
          partnerId: acc.partnerId,
          amount: {
            value: String((total - ownerSplit).toFixed(2)),
            currency: 'INR',
          },
        });
      }
    });
    console.log(arr);
    return arr;
  } else {
    val.acc.forEach((acc) => {
      arr.push({
        mid: acc.mid,
        partnerId: acc.partnerId,
        percentage: acc.value,
      });
    });
    console.log(arr);
    return arr;
  }
};

async function generateTxn2(data, splitInfo) {
  try {
    var txnInfo = JSON.parse(data.amount);
    var paytmParams = { head: {}, body: {} };
    paytmParams.body = {
      requestType: 'Payment',
      mid: process.env.Merchant_Id,
      websiteName: process.env.Website,
      orderId: generateRandomString(10),
      callbackUrl: process.env.Callback,
      txnAmount: {
        value: txnInfo.amount,
        currency: 'INR',
      },
      userInfo: {
        custId: generateRandomString(10),
      },
      splitSettlementInfo: {
        splitMethod: splitInfo.method,
        splitInfo: slipInfoGen(splitInfo, txnInfo.ownerAmt, txnInfo.amount),
      },
    };

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.Merchant_Key
    );
    paytmParams.head = {
      signature: checksum,
    };
    var res = await axios.post(
      `https://securegw.paytm.in/theia/api/v1/initiateTransaction?mid=${process.env.Merchant_Id}&orderId=${paytmParams.body.orderId}`,
      paytmParams
    );
    console.log(paytmParams);
    console.log(res.data);
    var details = {
      mid: process.env.Merchant_Id,
      orderId: paytmParams.body.orderId,
      CHECKSUMHASH: res.data.head.signature,
      txnToken: res.data.body.txnToken,
      TXN_AMOUNT: txnInfo.amount,
      WEBSITE: 'WEBSTAGING',
    };
    return details;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { generateTxn2 };
// var a = {
//   head: {
//     signature:
//       'K0ps/5uHUVqFVhsL/FO53OamiVlnlZyAWl8v1NX5gG+IMN+XwBOSRtJIrDA+5gJMCNrVAThUb0sYvCGfA4uXU15xGML4cYOE2Z0sa6WhfYI=',
//   },
//   body: {
//     requestType: 'Payment',
//     mid: 'IEEEKE83859063350399',
//     websiteName: 'WEBSTAGING',
//     orderId: 'W1H857TB67',
//     callbackUrl: 'http://localhost:3000//api/pay/paytm/callback',
//     txnAmount: { value: '4780.00', currency: 'INR' },
//     userInfo: { custId: 'N661OFOFY4' },
//     splitSettlementInfo: {
//       splitMethod: 'AMOUNT',
//       splitInfo: [
//         {
//           mid: 'onOGDTsm383921763269',
//           amount: { value: '4000', currency: 'INR' },
//         },
//       ],
//     },
//   },
// };
// var b = {
//   head: {
//     signature:
//       '1vaD0i/ZjSjVOYfNTDKqiksvJkKXwx2G+BAqxWv+phCIPGDd8vv/vku2KdZHRguwDXO4nidwuVVV9c+EP0lCehb3TCiF8sdWkN2P/WOiFdw=',
//   },
//   body: {
//     requestType: 'Payment',
//     mid: 'AXXXXXXXXXXXXX0',
//     orderId: 'order_1234512341231212123',
//     websiteName: 'WEBPROD',
//     txnAmount: { value: '10', currency: 'INR' },
//     userInfo: { custId: 'WE25622' },
//     splitSettlementInfo: {
//       splitMethod: 'AMOUNT',
//       splitInfo: [
//         { mid: 'lXXXXXXXXXXXXX6', amount: { value: '1', currency: 'INR' } },
//         { mid: 'BXXXXXXXXXXXXX6', amount: { value: '1', currency: 'INR' } },
//       ],
//     },
//     callbackUrl: 'https://domainaname.com',
//   },
// };
