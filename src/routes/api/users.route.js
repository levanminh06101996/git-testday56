const express = require("express");
const usersController = require("../../controllers/api/users.controller");
const userModel = require("../../models/users.model");
const throw404 = require("@/utils/throw404");
const router = express.Router();

router.param("id", async (req, res, next, id) => {
  const user = await userModel.findById(id);
  if (!user) throw404("user not found ");
  req.user = user;
  next();
});

router.get("/", usersController.getList);
router.get("/:user", usersController.getOne);
router.post("/", usersController.create);
router.put("/:user", usersController.update);
router.patch("/:user", usersController.update);
router.delete("/:user", usersController.remove);

module.exports = router;
