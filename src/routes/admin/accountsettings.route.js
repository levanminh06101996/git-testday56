const express = require("express");
const router = express.Router();
const accountsettingsController = require("../../controllers/admin/accountsettings.controller");

router.get("/", accountsettingsController.index);
module.exports = router;
