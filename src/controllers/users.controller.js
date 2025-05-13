const { success } = require("@/utils/response");
const userModel = require("../models/users.model");

exports.getUsers = async (req, res) => {
  const users = await userModel.getUsers();
  success(res, 200, users);
};
