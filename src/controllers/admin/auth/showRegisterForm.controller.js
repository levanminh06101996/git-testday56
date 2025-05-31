const usersService = require("@/services/users.services");
const md5 = require("md5");
exports.showRegisterForm = async (req, res) => {
  res.render("admin/layouts/auth/register/index", {
    layout: "admin/layouts/auth/register/index",
  });
};

exports.register = async (req, res) => {
  const user = await usersService.create({
    email: req.body.email,
    password: md5(req.body.password),
  });
  if (user) {
    res.redirect("/admin/login");
  }
};
