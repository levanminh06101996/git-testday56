const express = require("express");
const router = express.Router();
const dashboardRouter = require("../admin/dashboard.route");
const postsRouter = require("../admin/posts.route");
const userRouter = require("../admin/users.route");

router.use("/users", userRouter);
router.use("/dashboard", dashboardRouter);
router.use("/posts", postsRouter);
module.exports = router;
