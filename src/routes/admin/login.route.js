const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/admin/auth/showLoginForm.controller");
router.get("/", loginController.showLoginForm);
router.post("/", loginController.login);
module.exports = router;
