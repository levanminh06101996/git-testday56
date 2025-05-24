const express = require("express");
const router = express.Router();
const settingsController = require("../../controllers/admin/settings.controller");
router.get("/", settingsController.index);

module.exports = router;
