const { compareHash } = require("../helpers/bcryptjs");
const { signPayloadToToken } = require("../helpers/jwt");
let { User } = require("../models");

class UserController {
  static async Register(req, res, next) {
    try {
      let { email, companyName, password, address } = req.body;
      let registerUser = await User.create({
        email,
        companyName,
        password,
        address,
      });
      res.status(201).send(registerUser);
    } catch (error) {
      next(error);
    }
  }
  static async Login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!password) {
        throw { name: "ERROR_INVALID_EMAIL_OR_PASSWORD" };
      }
      let userLogin = await User.findOne({
        where: {
          email,
        },
      });
      if (!userLogin) {
        throw { name: "ERROR_INVALID_EMAIL_OR_PASSWORD" };
      }
      const compare = compareHash(password, userLogin.password);
      if (!compare) {
        throw { name: "ERROR_INVALID_EMAIL_OR_PASSWORD" };
      }
      const payload = {
        id: userLogin.id,
        companyName: userLogin.companyName,
      };
      const access_token = signPayloadToToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = UserController;
