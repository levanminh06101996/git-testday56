const express = require("express");
const router = express.Router();
const commentsController = require("../../controllers/admin/comments.controller");
router.get("/", commentsController.index);
router.get("/:id", commentsController.show);

module.exports = router;
