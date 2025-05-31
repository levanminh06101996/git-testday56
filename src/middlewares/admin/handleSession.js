const { randomUUID } = require("node:crypto");
const sessionModel = require("../../models/sessions.model");

async function handleSession(req, res, next) {
  // let _id = req.cookies.id;
  // let session = _id && (await sessionModel.findByid(req.cookies.id));
  // if (!session) {
  //   _id = randomUUID();
  //   const date = new Date();
  //   session = await sessionModel.create({ id: _id });
  //   date.setDate(date.getDate() + 1);
  //   res.set("Set-Cookie", `id=${_id};path=/;httpOnly;expire=${date}`);
  // }
  // const sessionData = JSON.parse(session.data ?? null) ?? {};
  // req.session = {
  //   get(key) {
  //     return sessionData[key] ?? null;
  //   },
  //   set(key, value) {
  //     sessionData[key] = value;
  //     sessionModel.update(_id, {
  //       data: JSON.stringify(sessionData),
  //     });
  //   },
  // };
  next();
}

module.exports = handleSession;
