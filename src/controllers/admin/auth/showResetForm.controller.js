exports.showResetForm = async (req, res) => {
  res.render("admin/layouts/auth/resetPassword/index", {
    layout: "admin/layouts/auth/resetPassword/index",
  });
};
