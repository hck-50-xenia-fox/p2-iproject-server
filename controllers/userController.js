const { OAuth2Client } = require("google-auth-library");
const { compareHashWithPass } = require("../helpers/bcrypt");
const { signPayloadtoToken } = require("../helpers/jwt");
const mailer = require("../helpers/nodemailer");
const { User } = require("../models/index");

class UserController {
  static async register(req, res, next) {
    try {
      let { username, email, password } = req.body;
      // console.log(req.body);
      let data = await User.create({
        username,
        email,
        password,
      });
      mailer(data.email);
      res.status(201).json({ message: `${data.id}, ${data.email}` });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let findUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!findUser) {
        throw { name: "error invalid email or password" };
      }

      const compare = compareHashWithPass(password, findUser.password);
      if (!compare) {
        throw { name: "error invalid email or password" };
      }

      const payload = {
        id: findUser.id,
        username: findUser.username,
      };
      const access_token = signPayloadtoToken(payload);
      // console.log(payload.username);
      res.status(200).json({
        access_token,
        username: findUser.username,
        id: findUser.id,
      });
    } catch (error) {
      next(error);
    }
  }

  static async loginGoogle(req, res, next) {
    try {
      const clientId = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      const token = await clientId.verifyIdToken({
        idToken: req.headers.google_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const [user, created] = await User.findOrCreate({
        where: {
          email: token.payload.email,
        },
        defaults: {
          username: `${token.payload.given_name} ${token.payload.family_name}`,
          email: token.payload.email,
          password: "google sign in",
        },
        hooks: false,
      });
      mailer(token.payload.email);
      let accessToken = signPayloadtoToken({
        id: user.id,
        email: user.email,
        password: user.password,
      });
      res.status(200).json({
        accessToken,
        username: user.username,
        id: user.id,
      });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }
}

module.exports = UserController;
