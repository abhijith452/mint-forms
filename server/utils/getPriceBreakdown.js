const getIndiconPrice = require('../../utils/getIndiconPrice');
const { getPaperPrice } = require('../../utils/getPaperPrice');
const { getExtraPagesPrice } = require('../../utils/getExtraPagesPrice');

function str2num(val) {
  if (isNaN(val)) {
    return 0;
  } else {
    return Number(val);
  }
}
function getRegratationFee(data) {
  return {
    qty: 1,
    amount: getIndiconPrice(data),
  };
}

function getAdditionalPapersInfo(data) {
  return {
    qty: isNaN(data.papers) ? 0 : data.papers - 1,
    amount: getPaperPrice(data),
  };
}
function getExtraPagesInfo(data) {
  return {
    qty:
      str2num(data.extraPage1) +
      str2num(data.extraPage2) +
      str2num(data.extraPage3),
    amount: getExtraPagesPrice(data),
  };
}

function getPriceBreakdown(data) {
  var fee = getRegratationFee(data);
  var additionalPapers = getAdditionalPapersInfo(data);
  var extraPages = getExtraPagesInfo(data);
  var registrationFee =
    fee.amount + additionalPapers.amount + extraPages.amount;
  var gst = registrationFee * 0.18;
  var gatewayPercent = data.category.includes('Foreign') ? 0.032 : 0.022;
  var gatewayFee = gatewayPercent * (registrationFee + gst);
  var gatewayFeeGST = gatewayFee * 0.18;
  var total = (registrationFee + gst + gatewayFee + gatewayFeeGST).toFixed(2);

  return {
    fee,
    gst,
    additionalPapers,
    extraPages,
    gatewayPercent,
    gatewayFee,
    gatewayFeeGST,
    total,
  };
}

module.exports = getPriceBreakdown;
