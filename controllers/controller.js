const { compare } = require('../helpers/bcyrpt');
const { loadToToken } = require("../helpers/jwt");
const { User } = require("../models/index");

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
}

module.exports = Controller;
