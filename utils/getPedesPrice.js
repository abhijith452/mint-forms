const indian = {
  'IEEE Student Member': 4000,
  'Non-IEEE Student Member': 5000,
  'IEEE Member': 10000,
  'Non-IEEE member': 12000,
  'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus': 6000,
};

const foreign = {
  'IEEE Student Member': 120,
  'Non-IEEE Student Member': 150,
  'IEEE Member': 300,
  'Non-IEEE member': 360,
  'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus': 200,
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
function getPedesTotalPrice(val, price) {
  var feePercent = val.citizen === 'Indian' ? 0.032 : 0.022;
  var fee = price * feePercent;
  var feeGST = fee * 0.18;
  return (price + fee + feeGST).toFixed(2);
}
function getExtraPagesPrice2(values) {
  var numOfPages = str2num(values.extraPage1) + str2num(values.extraPage2);
  if (values.citizen === 'Indian') {
    return numOfPages * indianPage;
  } else {
    return numOfPages * foreignPage;
  }
}

module.exports = {
  getPedesPrice,
  getPedesTotalPrice,
  getExtraPagesPrice2,
};
