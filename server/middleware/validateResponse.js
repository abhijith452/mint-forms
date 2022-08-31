const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (err) {
    res.status(400).send({ error: err.errors[0]});
  }
};

module.exports = validate;
