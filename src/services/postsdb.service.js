const postsModel = require("../models/posts.model");
const throwError = require("../utils/throwError");
class postsService {
  async getAll(page, limit) {
    const items = await postsModel.findAll(page, limit);

    const total = await postsModel.count();
    return { items, total };
  }

  async getById(id) {
    const post = await postsModel.findById(id);
    return post;
  }

  async create(data) {
    const post = await postsModel.create(data);
    return post;
  }

  async update(id, data) {
    const post = await postsModel.update(id, data);
    return post;
  }

  async remove(id) {
    const post = await postsModel.remove(id);
    return post;
  }
}

module.exports = new postsService();
