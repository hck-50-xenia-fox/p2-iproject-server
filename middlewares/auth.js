const { tokenToLoad } = require("../helpers/jwt");
const { User } = require("../models/index");

async function authen(req, res, next) {
  // console.log(req);
  console.log(req.headers.access_token)
  try {
    let access_token = req.headers.access_token;
    if (!access_token) {
      throw { name: "Not Login" };
    }

    let payload = tokenToLoad(access_token);
    let user = await User.findByPk(payload.id);
    if (!user) {
      throw { name: "Not Login" };
    }

    req.user = {
      id: user.id,
      username: user.username,
    };
    next();
  } catch (error) {
    // console.log(error);
    next(error);
  }
}

module.exports = authen;
