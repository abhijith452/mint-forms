const getIndiconPrice = require('../../utils/getIndiconPrice');
const { getPaperPrice } = require('../../utils/getPaperPrice');
const { getExtraPagesPrice } = require('../../utils/getExtraPagesPrice');
const getTotalPrice = require('../../utils/getTotalPrice');
const getPedesPrice = require('../../utils/getPedesPrice');
const {
  getExordiumPrice,
  getExordiumTotalPrice,
} = require('../../utils/getExordiumPrice');

const priceValidator = (req) => {
  var total = 0;
  if (req.query.formId === 'indicon2022' || req.query.formId === 'demo') {
    total = getPriceValidateIndicon(req);
  } else if (req.query.formId === 'pedes2022') {
    total = getPedesPrice(req);
  } else if (req.query.formId === 'exordium') {
    total = getExordiumTotalPrice(getExordiumPrice(req));
  }
  if (total === JSON.parse(req.body.amount).amount) {
    console.log('Amount validated');
    next();
  } else {
    res.status(400).send({ error: "Selected category isn't avaliable" });
  }
};

const getPriceValidateIndicon = (req) => {
  const authorPrice = getIndiconPrice(req.body);
  const paper = getPaperPrice(req.body);
  const extraPages = getExtraPagesPrice(req.body);
  const total = getTotalPrice(authorPrice + paper + extraPages, req.body);
  return total;
};

module.exports = priceValidator;
