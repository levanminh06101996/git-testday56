const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/admin/auth/showLoginForm.controller");
router.get("/", loginController.showLoginForm);

module.exports = router;
