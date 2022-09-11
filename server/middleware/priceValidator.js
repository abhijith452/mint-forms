const getIndiconPrice = require('../../utils/getIndiconPrice');
const { getPaperPrice } = require('../../utils/getPaperPrice');
const { getExtraPagesPrice } = require('../../utils/getExtraPagesPrice');

const priceValidator = (req, res, next) => {
  const authorPrice = getIndiconPrice(req.body);
  const paper = getPaperPrice(req.body);
  const extraPages = getExtraPagesPrice(req.body);
  console.log(authorPrice + paper + extraPages);
  console.log(JSON.parse(req.body.amount).amount);
  if (authorPrice + paper + extraPages === JSON.parse(req.body.amount).amount) {
    console.log('Amount validated');
    next();
  } else {
    res.status(400).send({ error: "Selected category isn't avaliable" });
  }
};

module.exports = priceValidator;
