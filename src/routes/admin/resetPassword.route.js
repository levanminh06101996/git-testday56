const express = require("express");
const router = express.Router();
const resetPasswordController = require("../../controllers/admin/auth/showResetForm.controller");
router.get("/", resetPasswordController.showResetForm);
module.exports = router;
