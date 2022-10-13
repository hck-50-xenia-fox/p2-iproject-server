const apiKey = "AIzaSyBH_Y00BR6bUbEup5uEROdVOjdxNGBt5sg";
const baseApiUrl = "https://www.googleapis.com/youtube/v3";
const { LiquipediaApi } = require("liquipedia-api");
const nodemailer = require("../helpers/nodemailer");
const { createToken } = require("../helpers/jwt");
const { readToken } = require("../helpers/jwt");
const axios = require("axios");
const liquipediaApi = new LiquipediaApi({
  USER_AGENT: "MyAwesomeProject/1.0 (my.email@gmail.com)",
});
const { User } = require("../models/index");
const bcrypt = require("../helpers/bcrypt");

class Controller{
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "Email/password is required" };
      const data = await User.create({ email, password });
      res.status(201).json({ id: data.id, email: data.email });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "Email/password is required" };
      const foundEmail = await User.findOne({
        where: { email },
      });
      if (!foundEmail) throw { name: "invalid email/password" };
      const validatePassword = bcrypt.comparePassword(
        password,
        foundEmail.password
      );
      if (!validatePassword) throw { name: "invalid email/password" };

      const payload = {
        id: foundEmail.id,
        email: foundEmail.email,
      };

      const access_toqen = createToken(payload);
      nodemailer(email)
      res.status(200).json({ access_toqen });
    } catch (err) {
      next(err);
    }
  }
}