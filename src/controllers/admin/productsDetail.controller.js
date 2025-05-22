const postsSevice = require("../../services/posts.service");

exports.index = async (req, res) => {
  const item = await postsSevice.getPostById(req.params.id);
  console.log(items);

  res.render("admin/productsDetail/show", {
    title: "products Details list",
    post: item,
  });
};
