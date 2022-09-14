function getTotalPrice(amount, values) {
  var gst = amount * 0.18;
  var feePercent = values.category.includes('Foreign') ? 0.032 : 0.022;
  var fee = feePercent * (amount + gst);
  var feeGST = fee * 0.18;
  return (amount + gst + fee + feeGST).toFixed(2);
}
module.exports = getTotalPrice;
