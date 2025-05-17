const express = require("express");
const router = express.Router();
const dashboardRouter = require("../admin/dashboard.route");
router.use("/", dashboardRouter);
module.exports = router;
