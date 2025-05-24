exports.showForgotForm = async (req, res) => {
  res.render("admin/layouts/auth/forgotPassword/index", {
    layout: "admin/layouts/auth/forgotPassword/index",
  });
};
