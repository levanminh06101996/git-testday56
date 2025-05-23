const postsSevice = require("../../services/postsdb.service");

exports.index = async (req, res) => {
  const result = await postsSevice.getAll(1, 20);
  const items = result.items;

  res.render("admin/posts/index", {
    title: "posts list",
    posts: items,
  });
};

exports.show = async (req, res) => {
  const post = await postsSevice.getById(req.params.id);
  res.render("admin/posts/show", { post });
};
