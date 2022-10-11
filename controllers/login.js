const { comparePW, signToken } = require("../helpers/bcryptjsandjwt");
const { User } = require("../models");

class Login {
  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      //   console.log(email, "==email");
      //   console.log(password, "==password");
      if (!email || !password) {
        throw { name: "REQUIRED" };
      }

      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { name: "INVALIDUSER" };
      }
      //   console.log(findUser.password, "=====pasword user");
      const checkPW = comparePW(password, findUser.password);
      if (!checkPW) {
        throw { name: "INVALIDUSER" };
      }

      const payload = {
        id: findUser.id,
        email: findUser.email,
      };

      const token = signToken(payload);
      res.status(200).json({
        access_token: token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Login;
