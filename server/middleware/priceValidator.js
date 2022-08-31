const getIndiconPrice = require('../../utils/getIndiconPrice');
const getPaperPrice = require('../../utils/getPaperPrice');

const priceValidator = (req, res, next) => {
  const authorPrice = getIndiconPrice(req.body);
  const paper = getPaperPrice(req.body);

  if (authorPrice + paper === JSON.parse(req.body.amount).amount) {
    console.log("Amount validated")
    next();
  } else {
    res.status(400).send({ error: "Selected category isn't avaliable" });
  }
};

module.exports = priceValidator;
