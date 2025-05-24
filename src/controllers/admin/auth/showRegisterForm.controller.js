exports.showRegisterForm = async (req, res) => {
  res.render("admin/layouts/auth/register/index", {
    layout: "admin/layouts/auth/register/index",
  });
};
