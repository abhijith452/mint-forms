const foreign = 20;
const indian = 500;

function getExtraPagesPrice(values) {
  var numOfPages =
    str2num(values.extraPage1) +
    str2num(values.extraPage2) +
    str2num(values.extraPage3);
  if (values.category.includes('Indian')) {
    return indian * numOfPages;
  }
  if (values.category.includes('Foreign')) {
    return foreign * numOfPages;
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
function getNumOfAdditionalPages(values) {
  var numOfPages =
    str2num(values.extraPage1) +
    str2num(values.extraPage2) +
    str2num(values.extraPage3);
  return numOfPages;
}
function getSingleAdditionalPagePrice(values) {
  if (values.category.includes('Indian')) {
    return indian;
  }
  if (values.category.includes('Foreign')) {
    return foreign;
  } else {
    return 0;
  }
}

module.exports = {
  getExtraPagesPrice,
  getNumOfAdditionalPages,
  getSingleAdditionalPagePrice,
};
