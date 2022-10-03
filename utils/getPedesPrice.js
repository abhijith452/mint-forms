const indian = {
  'IEEE Student Member': 4720,
  'Non-IEEE Student Member': 5900,
  'IEEE Member': 11800,
  'Non-IEEE member': 14160,
  'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus': 7080,
};

const foreign = {
  'IEEE Student Member': 141.6,
  'Non-IEEE Student Member': 177,
  'IEEE Member': 354,
  'Non-IEEE member': 424.8,
  'IEEE Life Fellow/ IEEE Life Member/IEEE Member Professor Emeritus': 236,
};

function getPedesPrice(val) {
  if (val.category !== '') {
    if (val.citizen === 'Indian') {
      return indian[val.category];
    } else if (val.citizen === 'Foreign') {
      return foreign[val.category];
    }
    else{
      return 0;
    }
  } else {
    return 0;
  }
}
function getPedesTotalPrice(val, price) {
  var feePercent = val.citizen === 'Indian' ? 0.032 : 0.022;
  var fee = price * feePercent;
  var feeGST = fee * 0.18;
  return (price + fee + feeGST).toFixed(2);
}

module.exports = {
  getPedesPrice,
  getPedesTotalPrice,
};
