const pricing = {
  nonIEEE: [700, 850],
  IEEE: [550, 700],
  IAS: [450, 600],
};
var index = new Date().toISOString() > '2022-10-20T18:29:59.059Z' ? 1 : 0;

function getEmergencePrice(val) {
  if (val.ias === 'true' && val.validIEEE === 'true') {
    return pricing.IAS[index];
  } else if (val.ias === 'false' && val.validIEEE === 'true') {
    return pricing.IEEE[index];
  } else {
    return pricing.nonIEEE[index];
  }
}

function getEmergenceTotalPrice(amount, values) {
  var gst = amount * 0.18;
  var feePercent = 0.022;
  var fee = feePercent * amount;
  var feeGST = fee * 0.18;
  return (amount + fee + feeGST).toFixed(2);
}
module.exports = { getEmergencePrice, getEmergenceTotalPrice };
