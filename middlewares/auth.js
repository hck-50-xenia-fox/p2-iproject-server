const { verifyTokentoPayload } = require("../helpers/jwt");
const { User } = require("../models/index");

async function authentication(req, res, next) {
  try {
    let access_token = req.headers.access_token;
    if (!access_token) {
      throw { name: "Not Login" };
    }
    let payload = verifyTokentoPayload(access_token);
    let user = await User.findByPk(payload.id);
    if (!user) {
      throw { name: "Not Login" };
    }
    req.user = {
      id: user.id,
      email: user.email,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
