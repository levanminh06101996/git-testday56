const usersService = require("../services/users.services");
const response = require("../utils/response");

// exports.getUsers = async (req, res) => {
//   const users = await userModel.getUsers();
//   success(res, 200, users);
// };
exports.getList = async (req, res) => {
  const users = await usersService.getAll();
  response.success(res, 200, users);
};

exports.getOne = async (req, res) => {
  const user = await usersService.getById(req.params.id);
  response.success(res, 200, user);
};

exports.create = async (req, res) => {
  const user = await usersService.create(req.body);
  response.success(res, 201, user);
};

exports.update = async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  response.success(res, 200, user);
};

exports.remove = async (req, res) => {
  await usersService.remove(req.params.id);
  response.success(res, 204);
};
