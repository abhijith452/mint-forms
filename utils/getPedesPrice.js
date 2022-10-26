const indian = {
  'Non-Author Attendee': [4000, 4400],
  'Author (Academia/Industry)': [10000, 11000],
  'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus': [
    6000, 6600,
  ],
};
const indianNonIEEE = {
  'Non-Author Attendee': [5000, 5500],
  'Author (Academia/Industry)': [12000, 13200],
};
const foreign = {
  'Non-Author Attendee': [120, 132],
  'Author (Academia/Industry)': [300, 330],
  'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus': [
    200, 220,
  ],
};
const foreignNonIEEE = {
  'Non-Author Attendee': [150, 165],
  'Author (Academia/Industry)': [360, 396],
};
const indianPage = 1000;
const foreignPage = 20;
var index = new Date().toISOString() > '2022-10-30T18:29:59.059Z' ? 1 : 0;

function getPedesPrice(val) {
  if (val.category !== '') {
    if (val.citizen === 'Indian') {
      return val.validIEEE === 'true'
        ? indian[val.category][index]
        : indianNonIEEE[val.category][index];
    } else if (val.citizen === 'Foreign') {
      return val.validIEEE === 'true'
        ? foreign[val.category][index]
        : foreignNonIEEE[val.category][index];
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
  var feePercent = values.citizen === 'Foreign' ? 0.0305 : 0.0205;
  var fee = feePercent * (amount + gst);
  var feeGST = fee * 0.18;
  return (amount + gst + fee + feeGST).toFixed(2);
}

function getFee(amount, values) {
  var gst = amount * 0.18;
  var feePercent = values.citizen === 'Foreign' ? 0.032 : 0.0205;
  var fee = feePercent * (amount + gst);
  var feeGST = fee * 0.18;
  return (fee + feeGST).toFixed(2);
}
module.exports = {
  getPedesPrice,
  getPedesTotalPrice,
  getExtraPagesPrice2,
  getFee,
};
