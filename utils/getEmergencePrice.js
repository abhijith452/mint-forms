const pricing = {
  nonIEEE: [700, 850],
  IEEE: [550, 700],
  IAS: [450, 600],
};
var earlyBirdLastDate = '2022-10-20T18:29:59.059Z';
var index = new Date().toISOString() > earlyBirdLastDate ? 1 : 0;

function getEmergencePrice(val) {
  if (
    val.category === 'IAS Member Rs 450' ||
    val.category === 'IAS Member Rs 600'
  ) {
    return pricing.IAS[index];
  }
  if (
    val.category === 'IEEE Member Rs 550' ||
    val.category === 'IEEE Member Rs 700'
  ) {
    return pricing.IEEE[index];
  } else if (
    val.category === 'Non-IEEE Member Rs 700' ||
    val.category === 'Non-IEEE Member Rs 850'
  ) {
    return pricing.nonIEEE[index];
  } else {
    return 0;
  }
}

function getEmergenceTotalPrice(amount, values) {
  var gst = amount * 0.18;
  var feePercent = 0.022;
  var fee = feePercent * amount;
  var feeGST = fee * 0.18;
  return (amount + fee + feeGST).toFixed(2);
}
module.exports = {
  getEmergencePrice,
  getEmergenceTotalPrice,
  earlyBirdLastDate,
};
