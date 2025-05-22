const express = require("express");
const router = express.Router();
const productDetailsController = require("../../controllers/admin/productsDetail.controller");
router.get("/:id", productDetailsController.index);

module.exports = router;
