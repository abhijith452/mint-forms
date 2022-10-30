function getExordiumPrice(values) {
  return values.validIEEE === 'true' ? 649 : 799;
}

function getExordiumTotalPrice(amount, values) {
  var gst = amount * 0.18;
  var feePercent = 0.022;
  var fee = feePercent * amount;
  var feeGST = fee * 0.18;
  return (amount + fee + feeGST).toFixed(2);
}

module.exports = {
  getExordiumPrice,
  getExordiumTotalPrice,
};
