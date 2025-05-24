const express = require("express");
const router = express.Router();
const forgotPasswordController = require("../../controllers/admin/auth/showForgotForm.controller");
router.get("/", forgotPasswordController.showForgotForm);
module.exports = router;
