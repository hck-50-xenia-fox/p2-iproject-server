const { compare } = require('../helpers/bcyrpt');
const { loadToToken } = require("../helpers/jwt");
const { User } = require("../models/index");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_API_KEY);

class Controller {
  static async login(req, res, next) {
    // console.log(req.body);
    try {
      const { email, password } = req.body;
        console.log(password);
      const data = await User.findOne({
        where: {
          email,
        },
      });

      let oneUser = data.dataValues
      

      if (!oneUser) {
        throw {
          name: "Invalid email or pass",
        };
      }

      const comparePaass = compare(oneUser.password, password);
      if (!comparePaass) {
        throw {
          name: "Invalid email or pass",
        };
      }

      const payload = {
        id: oneUser.id,
        username: oneUser.username,
      };
      const aksesToken = loadToToken(payload);
      res.status(200).json({
        access_token: aksesToken,
      });
    } catch (error) {
        console.log(error);
      next(error);
    }
  }

  static async regist(req, res, next) {
    try {
      const { username, email, password } = req.body;
      let data = await User.create({
        username,
        email,
        password,
      });
      console.log(data);
      res.status(201).json({ id: data.id, email: data.email });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async google(req, res, next) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.headers.google_token,
        audience: process.env.GOOGLE_API_KEY
      });
      // console.log(ticket);
      const payload = ticket.getPayload();
      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          username: payload.name,
          email: payload.email,
          password: "R311094R",
        },
        hooks: false,
      });
      
      let id = user.id;
      const access_token = loadToToken({
        id: user.id,
      });
      res.status(200).json({ access_token});
    } catch (error) {
      console.log(error);
      next(error);
    }

}
}

module.exports = Controller;
