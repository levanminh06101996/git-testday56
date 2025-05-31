exports.index = async (req, res) => {
  res.json({ message: "Logged in", user });
  res.render("admin/settings/index");
};
