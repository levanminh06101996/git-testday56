const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/admin/auth/showRegisterForm.controller");
router.get("/", registerController.showRegisterForm);
router.post("/", registerController.register);
module.exports = router;
