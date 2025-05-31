const usersServices = require("@/services/users.services");
const md5 = require("md5");

exports.showLoginForm = (req, res) => {
  res.render("admin/layouts/auth/login/index", {
    layout: "admin/layouts/auth/login/index",
  });
};

exports.login = async (req, res) => {
  console.log("hello");
  const password = md5(req.body.password);
  const email = req.body.email;
  const user = await usersServices.getByEmailAndPassword(email, password);
  if (user) {
    req.session.set("userId", user.id);
    res.redirect("/admin/users");
  }
};
