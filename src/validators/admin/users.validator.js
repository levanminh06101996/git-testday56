const { checkSchema } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

exports.createUser = [
  (req, res, next) => {
    res.view = "admin/users/create";
    next();
  },
  checkSchema({
    name: {
      notEmpty: true,
      errorMessage: "name is not empty.",
    },
    email: {
      notEmpty: true,
      errorMessage: "email is not empty.",
    },
    phone: {
      notEmpty: true,
      errorMessage: "phone is not empty.",
    },
  }),
  handleValidationErrors,
];
