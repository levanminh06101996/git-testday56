const sessionModel = require("../../models/sessions.model");
const throwError = require("../../utils/throwError");
class sessionsService {
  async getById(id) {
    const session = await sessionModel.findById(id);
    return session;
  }

  async create(data) {
    const session = await sessionModel.create(data);
    return session;
  }

  async update(id, data) {
    const session = await sessionModel.update(id, data);
    return session;
  }
}

module.exports = new sessionsService();
