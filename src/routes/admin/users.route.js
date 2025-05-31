const express = require("express");
const usersController = require("../../controllers/admin/users.controller");
const userValidators = require("../../validators/admin/users.validator");
const router = express.Router();

router.get("/", usersController.index);
router.post("/", userValidators.createUser, usersController.store);
router.get("/edit/:id", usersController.edit);
router.get("/create", usersController.create);
router.get("/:id", usersController.show);
router.put("/edit/:id", usersController.update);
router.delete("/:id", usersController.forceDelete);

module.exports = router;
