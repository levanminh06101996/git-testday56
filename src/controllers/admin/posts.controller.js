const postsSevice = require("../../services/posts.service");

exports.index = async (req, res) => {
  const items = await postsSevice.getAllPosts(1, 20);
  console.log(items);

  res.render("admin/posts/index", {
    title: "posts list",
    users: items,
  });
};
