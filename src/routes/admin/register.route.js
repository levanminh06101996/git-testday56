const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/admin/auth/showRegisterForm.controller");
router.get("/", registerController.showRegisterForm);
module.exports = router;
