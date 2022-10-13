let { User, History } = require("../models/index");
let axios = require("axios");
let emailSend = require("../helper/nodemailer");

let { comparePassword, createAccessToken } = require("../helper/helper");

class Controller {
  static async register(req, res, next) {
    try {
      let data = await axios({
        url: `https://spott.p.rapidapi.com/places/ip/me`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7e395b7ab8msh4ecbfdd9d3bdfcbp151804jsn9e6084e31423",
          "X-RapidAPI-Host": "spott.p.rapidapi.com",
        },
      });

      let lokasi = data.data.name;
      console.log(lokasi);
      let { username, email, password } = req.body;
      let dataUser = await User.create({
        username,
        email,
        password,
        address: lokasi,
      });
      emailSend(dataUser);

      let dataHistory = await History.create({
        name: dataUser.username,
        description: `New user with id ${dataUser.id}, and name ${dataUser.username} register`,
      });
      res.status(201).json({
        id: dataUser.id,
        email: dataUser.email,
        lokasi: dataUser.address,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const dataUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!email) {
        throw { name: "Email is required" };
      }

      if (!password) {
        throw { name: "Password is required" };
      }

      if (!dataUser) {
        throw { name: "Invalid email/password" };
      }

      if (!comparePassword(password, dataUser.password)) {
        throw { name: "Invalid email/password" };
      }

      const payload = {
        id: dataUser.id,
      };

      const access_token = createAccessToken(payload);

      res.status(200).json({
        access_token,
        username: dataUser.username,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getHistory(req, res, next) {
    try {
      let data = await History.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
