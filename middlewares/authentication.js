const {
  encryptPassword,
  comparePassword,
  signToken,
  verifyToken,
} = require("../helpers/helper");
const User = require("../models/user");

const authentication = async (req, res, next) => {
  try {
    let { access_token } = req.headers;
    if (!access_token) {
      throw { name: `UNAUTHORIZED` };
    }
    let payload = verifyToken(access_token);
    let user = await User.findByPk(payload.id);
    if (!user) {
      throw { name: `UNAUTHORIZED` };
    }
    req.user = { id: user.id, name: user.name };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
