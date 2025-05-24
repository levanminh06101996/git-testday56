exports.showLoginForm = (req, res) => {
  res.render("admin/layouts/auth/login/index", {
    layout: "admin/layouts/auth/login/index",
  });
};
