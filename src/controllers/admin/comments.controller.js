exports.index = async (req, res) => {
  res.render("admin/comments/index");
};

exports.show = async (req, res) => {
  res.render("admin/comments/show");
};
