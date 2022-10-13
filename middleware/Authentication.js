const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
  try {
    let { access_token } = req.headers;
    if (!access_token) {
      throw { name: " Not Login" };
    }
    let verify = verifyToken(access_token);
    let user = await User.findByPk(verify.id);
    if (!user) {
      throw { name: "Can't login" };
    }
    req.user = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    // console.log(req.user, "<<<<<<< ini di authen");
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = authentication;
