const { comparePW, signToken } = require("../helpers/bcryptjsandjwt");
const { User } = require("../models");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

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

  // login google
  static async googleSignIn(req, res, next) {
    try {
      // console.log(req.headers, "===server");

      console.log(process.env.CLIENT_ID, "=== login google");
      const ticket = await client.verifyIdToken({
        idToken: req.headers.google_token,
        audience: process.env.CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();

      const [findUser, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          id: payload.id,
          username: payload.name,
          email: payload.email,
          name: payload.name,
          password: "google password",
        },
        hooks: false,
      });
      const payloadUser = {
        id: findUser.id,
        username: findUser.username,
        email: findUser.email,
        name: findUser.name,
      };

      const access_token = signToken(payloadUser);
      let code = 200;
      if (created) {
        code = 201;
      }
      res.status(code).json({
        access_token,
        name: findUser.name,
        email: findUser.email,
      });
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }
}

module.exports = Login;
