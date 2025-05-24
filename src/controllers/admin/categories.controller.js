const usersService = require("../../services/users.services");
exports.index = async (req, res) => {
  const page = req.query.page ?? 1;
  const { items, total } = await usersService.getAll(page, 20);
  res.render("admin/categories/index", {
    title: "Categories",
    users: items,
    total,
  });
};
