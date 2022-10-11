const { comparePassword } = require("../helpers/bcrypt");
const { signPayload } = require("../helpers/jwt");
const { User } = require("../models/index");

class Controller {
  static async registerUser(req, res) {
    try {
      let { email, password } = req.body;
      await User.create({
        email,
        password,
      });
      res.status(201).json({ message: "Success registraion" });
    } catch (error) {
      if (error === "SequelizeValidationError") {
        res.status(400).json(error.errors[0].message);
      } else {
        res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  }

  static async loginUser(req, res) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw { name: "Email is required" };
      } else if (!password) {
        throw { name: "Password is required" };
      }
      let data = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!data) {
        throw { name: "Invalid email/password" };
      }
      let comparePW = comparePassword(password, data.password)

      if (!comparePW) {
        throw { name: "Invalid email/password" };
      }
      let payload = {
        id: data.id,
        email: data.email,
      };
      const access_token = signPayload(payload);
      res.status(200).json({ access_token, email: data.email, id: data.id });
    } catch (error) {
        console.log(error);
      if (error.name === "SequelizeValidationError") {
        res.status(400).json(error.errors[0].message);
      } else if (error.name === "Invalid email/password") {
        res.status(401).json({ msg: "Invalid email or Password" });
      } else {
        res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  }
}

module.exports = Controller;
