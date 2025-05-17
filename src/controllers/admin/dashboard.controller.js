const usersService = require("../../services/users.services");

exports.index = async (req, res) => {
  const items = await usersService.getAll(1, 20);
  console.log(items);

  res.render("admin/dashboard/index", {
    title: "Users list",
    users: items,
  });
};
