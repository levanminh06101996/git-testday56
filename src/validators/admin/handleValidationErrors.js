const { validationResult } = require("express-validator");
const response = require("@/utils/response");

const handleValidationErrors = (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) return next();
  console.log(result);
  const errors = result
    .array({ onlyFirstError: true })
    .reduce((errors, error) => {
      errors[error.path] = error.msg;
      return errors;
    }, {});
  console.log(errors);
  res.render(res.view, { errors, old: req.body });
};

module.exports = handleValidationErrors;
