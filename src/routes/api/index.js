const express = require("express");
const authRouter = require("./auth.route");
const postsRouter = require("./posts.route");
const userRouter = require("./users.route");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/posts", postsRouter);
router.use("/users", userRouter);

module.exports = router;
