const getIndiconPrice = require('../../utils/getIndiconPrice');
const { getPaperPrice } = require('../../utils/getPaperPrice');
const { getExtraPagesPrice } = require('../../utils/getExtraPagesPrice');
const getTotalPrice = require('../../utils/getTotalPrice');
const {
  getPedesTotalPrice,
  getPedesPrice,
} = require('../../utils/getPedesPrice');

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
  } else if (req.query.formId === 'pedes2022') {
    total = getPedesTotalPrice(req.body, getPedesPrice(req.body));
  }
  if (total === JSON.parse(req.body.amount).amount) {
    console.log('Amount validated');
    next();
  } else {
    res.status(400).send({ error: "Selected category isn't avaliable" });
  }
};

module.exports = priceValidator;
