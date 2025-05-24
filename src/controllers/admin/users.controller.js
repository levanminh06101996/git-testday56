const usersService = require("../../services/users.services");

exports.index = async (req, res) => {
  const page = req.query.page ?? 1;
  const { items, total } = await usersService.getAll(page, 20);
  console.log(items);
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
