const { verifyToken } = require("../helpers/bcryptjsandjwt");
const { User } = require("../models");

const Authentication = async (req, res, next) => {
  try {
    const { access_token: token } = req.headers;
    if (!token) {
      throw { name: "UNAUTHORIZED" };
    }
    const payload = verifyToken(token);
    const findUser = await User.findByPk(payload.id);
    if (!findUser) {
      throw { name: "UNAUTHORIZED" };
    }
    req.user = {
      id: findUser.id,
      email: findUser.email,
      name: findUser.name,
    };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = Authentication;
