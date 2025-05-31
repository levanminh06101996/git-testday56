const { body } = require("express-validator");
const usersService = require("../../services/users.services");
const throw404 = require("@/utils/throw404");
const throwError = require("@/utils/throwError");
const { error } = require("@/utils/response");

exports.index = async (req, res) => {
  const page = req.query.page ?? 1;
  const { items, total } = await usersService.getAll(page, 20);

  res.render("admin/users/index", {
    title: "Users",
    users: items,
    total,
  });
};

exports.show = async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.render("admin/users/show", { user, title: "user Details" });
};

exports.create = async (req, res) => {
  res.render("admin/users/create", {
    old: {},
    errors: {},
  });
};

exports.store = async (req, res) => {
  const { confirm_password, ...body } = req.body;
  console.log(body);
  const user = await usersService.create(body);
  res.redirect("/admin/users");
};

// exports.edit = async (req, res) => {
//   res.render("admin/users/edit");
// };

exports.edit = async (req, res) => {
  const user = await usersService.getById(req.params.id);
  console.log(user);
  res.render("admin/users/edit", { user });
};

exports.update = async (req, res) => {
  try {
    const { confirm_password, ...body } = req.body;
    const user = await usersService.update(req.params.id, body);
    res.redirect(`/admin/users/${req.params.id}`);
  } catch (error) {
    throwError(500, "lỗi khi cập nhật", error);
  }
};

exports.forceDelete = async (req, res) => {
  const user = await usersService.remove(req.params.id);
  res.redirect("/admin/users");
};
