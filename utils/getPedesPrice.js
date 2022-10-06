const indian = {
  'IEEE Student author': 4000,
  'Student author': 5000,
  'IEEE Author (Academia/Industry)': 10000,
  'Author (Academia/Industry)': 12000,
  'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus': 6000,
  'TEST': 100,
};

const foreign = {
  'IEEE Student author': 120,
  'Student author': 150,
  'IEEE Author (Academia/Industry)': 300,
  'Author (Academia/Industry)': 360,
  'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus': 200,
  'TEST': 1,
};

const indianPage = 1000;
const foreignPage = 20;

function getPedesPrice(val) {
  if (val.category !== '') {
    if (val.citizen === 'Indian') {
      return indian[val.category];
    } else if (val.citizen === 'Foreign') {
      return foreign[val.category];
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
function str2num(val) {
  if (isNaN(val)) {
    return 0;
  } else {
    return Number(val);
  }
}
// function getPedesTotalPrice(val, price) {
//   var feePercent = val.citizen === 'Indian' ? 0.032 : 0.022;
//   var fee = price * feePercent;
//   var feeGST = fee * 0.18;
//   return (price + fee + feeGST).toFixed(2);
// }
function getExtraPagesPrice2(values) {
  var numOfPages = str2num(values.extraPage1) + str2num(values.extraPage2);
  if (values.citizen === 'Indian') {
    return numOfPages * indianPage;
  } else {
    return numOfPages * foreignPage;
  }
}
function getPedesTotalPrice(amount, values) {
  var gst = amount * 0.18;
  var feePercent =
   values.citizen === 'Foreign'
      ? 0.032
      : 0.0205;
  var fee = feePercent * (amount + gst);
  var feeGST = fee * 0.18;
  return (amount + gst + fee + feeGST).toFixed(2);
}

function getFee(amount, values) {
  var gst = amount * 0.18;
  var feePercent =
   values.citizen === 'Foreign'
      ? 0.032
      : 0.0205;
  var fee = feePercent * (amount + gst);
  var feeGST = fee * 0.18;
  return (fee + feeGST).toFixed(2);
}
module.exports = {
  getPedesPrice,
  getPedesTotalPrice,
  getExtraPagesPrice2,
  getFee
};
