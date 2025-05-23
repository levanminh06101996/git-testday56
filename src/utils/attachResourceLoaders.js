const throw404 = require("./throw404");

const models = {
  user: require("../models/users.model"),
  //   ...
};

function attachResourceLoaders(router, params) {
  params.forEach((param) => {
    router.param(param, async (req, res, next, id) => {
      const resource = await models[param].findById(id);
      if (!resource) throw404(`${param} not found.`);
      req[param] = resource;
      next();
    });
  });
}

module.exports = attachResourceLoaders;
