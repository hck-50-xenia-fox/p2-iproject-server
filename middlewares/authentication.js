const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function Authentication(req, res, next) {
  try {
    let access_token = req.headers.access_token;
    if (!access_token) {
      throw { name: "NOT_LOGIN" };
    }
    let payload = verifyToken(access_token);
    let user = await User.findByPk(payload.id);
    if (!user) {
      throw { name: "NOT_LOGIN" };
    }
    req.user = {
      id: user.id,
      role: user.role,
      username: user.username,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = Authentication;
