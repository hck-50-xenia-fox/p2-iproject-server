const { payloadToToken } = require("../helpers/gentoken");
const { compareThePass } = require("../helpers/encryption");
const { OAuth2Client } = require("google-auth-library");
const axios = require("axios");

const {
  User,
  UserDetail,
  Payment,
  Item,
  Vehicle,
  Category,
} = require("../models");

class Controller {
  static async signUp(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      let data = (
        await User.create({
          username,
          email,
          password,
          phoneNumber,
          address,
        })
      ).get({ plain: true });
      delete data.password;
      res.status(201).json({ message: "user created successfully", data });
    } catch (err) {
      next(err);
    }
  }

  static async signIn(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!password || !email) throw { name: "empthy" };
      let user = await User.findOne({ where: { email }, raw: true });
      if (!user) throw { name: "Not_Valid" };
      let isValid = compareThePass(password, user.password);
      if (!isValid) throw { name: "Not_Valid" };
      let accessToken = payloadToToken({
        id: user.id,
        email: user.email,
      });
      delete user.password;
      res.status(200).json({ accessToken, user });
    } catch (err) {
      next(err);
    }
  }

  static async signInWithGoogle(req, res, next) {
    try {
      const client = new OAuth2Client(process.env.googleClientId);
      const ticket = await client.verifyIdToken({
        idToken: req.headers.google_token,
        audience: process.env.googleClientId,
      });
      const payload = ticket.getPayload();
      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          username: `${payload.given_name} ${payload.family_name}`,
          email: payload.email,
          password: "Bismillah",
          role: "Staff",
        },
      });
      let accessToken = payloadToToken({
        id: user.id,
        email: user.email,
      });
      delete user.password;
      res.status(200).json({ accessToken, user, img: payload.picture });
    } catch (err) {
      next(err);
    }
  }

  static async showAllItem(req, res, next) {
    try {
      let food = await Item.findAll({
        order: [["createdAt", "DESC"]],
      });
      if (!food) throw { name: "Not Found" };
      res.status(200).json(food);
    } catch (err) {
      next(err);
    }
  }

  static async getRestaurantData(req, res, next) {
    try {
      let { place } = req.query;
      if (place === "undefined" || !place) place = "NYC";
      let { data } = await axios.get(
        "https://api.yelp.com/v3/businesses/search?term=restaurant&location=" +
          place,
        {
          headers: {
            authorization: `Bearer ${process.env.yelpApiKey}`,
          },
        }
      );
      res.status(200).json(data.businesses);
    } catch (err) {
      next(err);
    }
  }

  static async showTheRestaurant(req, res, next) {
    try {
      let { data } = await axios.get(
        `https://api.yelp.com/v3/businesses/${req.params.id}`,
        {
          headers: {
            authorization: `Bearer ${process.env.yelpApiKey}`,
          },
        }
      );
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async addPaymentUser(req, res, next) {
    try {
      const { itemId } = req.body;
      let isEmpty = await Payment.findOne({
        where: { FoodId, UserId: req.user.id },
      });
      if (isEmpty) throw { name: "favoriteExist" };
      await Payment.create({ FoodId, UserId: req.user.id });
      res.status(201).json({ message: "Added to card successfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
