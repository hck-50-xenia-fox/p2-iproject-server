const { comparePassword } = require("../helpers/bcrypt");
const { signPayload } = require("../helpers/jwt");
const { User } = require("../models/index");
const axios = require("axios");
const X_RapidAPI_Key = process.env.X_RapidAPI_Key;
const X_RapidAPI_Host = "travel-advisor.p.rapidapi.com";
const rapid_url = "https://travel-advisor.p.rapidapi.com";
const rapid_headers = {
  "X-RapidAPI-Key": "467cf046a2msh3bee90bec04b41cp1381ddjsn71fbeb5301d5",
  "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
};

const covid_headers = {
  "X-RapidAPI-Key": "cd863f5f96mshbead8b39312ff1dp172206jsn04685c7e04f5",
  "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
};

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
      let comparePW = comparePassword(password, data.password);

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
      // console.log(error);
      if (error.name === "SequelizeValidationError") {
        res.status(400).json(error.errors[0].message);
      } else if (error.name === "Invalid email/password") {
        res.status(401).json({ msg: "Invalid email or Password" });
      } else {
        res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  }

  static async listPlaces(req, res) {
    try {
      const page = +req.query.page || 1;
      const limit = +req.query.size || 8;
      const query = req.query.search || "jakarta";

      let offset = page * limit - limit;

      let { data } = await axios({
        method: "get",
        url: `${rapid_url}/locations/search`,
        headers: rapid_headers,
        params: {
          query,
          limit,
          offset,
          units: "km",
          lang: "en-US",
        },
      });
      // console.log(data);
      res.status(200).json(data.data);
      // res.status(200).json({ test: "ini test" });
    } catch (error) {
      // console.log(error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

  static async listHotel(req, res) {
    try {
      const page = +req.query.page || 1;
      const limit = +req.query.size || 8;
      const location_id = +req.query.location_id || 294229;
      const adults = +req.query.adults || 1;
      const rooms = +req.query.rooms || 1;
      const nights = +req.query.nights || 1;

      let offset = page * limit - limit;

      let { data } = await axios({
        method: "get",
        url: `${rapid_url}/hotels/list`,
        headers: rapid_headers,
        params: {
          location_id,
          limit,
          offset,
          adults,
          rooms,
          nights,
        },
      });
      // console.log(data);
      res.status(200).json(data.data);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

  static async listAttraction(req, res) {
    try {
      // console.log("masuk sini");
      const page = +req.query.page || 1;
      const limit = +req.query.size || 8;
      const location_id = +req.query.location_id || 294229;

      let offset = page * limit - limit;

      let { data } = await axios({
        method: "get",
        url: `${rapid_url}/attractions/list`,
        headers: rapid_headers,
        params: {
          location_id,
          limit,
          offset,
          units: "km",
        },
      });
      // console.log(data);
      res.status(200).json(data.data);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

  static async listRestaurant(req, res) {
    try {
      const page = +req.query.page || 1;
      const limit = +req.query.size || 8;
      const location_id = +req.query.location_id || 294229;

      let offset = page * limit - limit;

      let { data } = await axios({
        method: "get",
        url: `${rapid_url}/restaurants/list`,
        headers: rapid_headers,
        params: {
          location_id,
          limit,
          offset,
          units: "km",
        },
      });
      res.status(200).json(data.data);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

  static async dataCovid(req, res) {
    try {
      const nameCountry = req.query.country || "indonesia";
      let { data } = await axios({
        method: "get",
        url: `https://covid-193.p.rapidapi.com/statistics`,
        headers: covid_headers,
        params: {
          country: nameCountry,
        },
      });
      //   console.log(data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
