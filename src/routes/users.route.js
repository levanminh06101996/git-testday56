const express = require("express");
const usersController = require("../controllers/users.controller");
const userModel = require("../models/users.model");
const throw404 = require("@/utils/throw404");
const attachResourceLoaders = require("@/utils/attachResourceLoaders");
const router = express.Router();

attachResourceLoaders(router, ["user"]);

router.get("/", usersController.getList);
router.get("/:user", usersController.getOne);
router.post("/", usersController.create);
router.put("/:user", usersController.update);
router.patch("/:user", usersController.update);
router.delete("/:user", usersController.remove);

module.exports = router;
