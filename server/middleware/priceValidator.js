const getIndiconPrice = require('../../utils/getIndiconPrice');
const { getPaperPrice } = require('../../utils/getPaperPrice');
const { getExtraPagesPrice } = require('../../utils/getExtraPagesPrice');
const getTotalPrice = require('../../utils/getTotalPrice');
const {
  getPedesPrice,
  getExtraPagesPrice2,
  getPedesTotalPrice,
} = require('../../utils/getPedesPrice');
const {
  getEmergencePrice,
  getEmergenceTotalPrice,
} = require('../../utils/getEmergencePrice');

const getPriceValidateIndicon = (req) => {
  const authorPrice = getIndiconPrice(req.body);
  const paper = getPaperPrice(req.body);
  const extraPages = getExtraPagesPrice(req.body);
  const total = getTotalPrice(authorPrice + paper + extraPages, req.body);
  return total;
};

const priceValidator = (req, res, next) => {
  var total = 0;
  if (req.query.formId === 'indicon2022' || req.query.formId === 'demo') {
    total = getPriceValidateIndicon(req);
  } else if (req.query.formId === 'emergence') {
    total = getEmergenceTotalPrice(getEmergencePrice(req.body));
  } else if (req.query.formId === 'pedes2022') {
    total = getPedesTotalPrice(
      getPedesPrice(req.body) + getExtraPagesPrice2(req.body),
      req.body
    );
  }
  console.log(total);
  console.log(JSON.parse(req.body.amount).amount);
  if (total === JSON.parse(req.body.amount).amount) {
    console.log('Amount validated');
    next();
  } else {
    res.status(400).send({ error: "Selected category isn't avaliable" });
  }
};

module.exports = priceValidator;
