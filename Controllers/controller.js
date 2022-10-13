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
  static loginSpotify(req, res) {
    const { code } = req.body;
    if (!code) {
      throw { name: "Invalid email/password" };
    }
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });

    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        res.status(200).json({
          access_token: data.body.access_token,
          expiresIn: data.body.expiresIn,
        });
      })
      .catch((err) => {
        next(err);
      });
  }
  static async matches(req, res, next) {
    try {
      const news = await liquipediaApi.dota.getMatches();
      res.status(200).json(news);
    } catch (error) {
      next(error);
    }
  }
  static async tournaments(req, res, next) {
    try {
      const news = await liquipediaApi.dota.getTournaments();
      news.length = Math.min(news.length, 3);
      res.status(200).json(news);
    } catch (error) {
      next(error);
    }
  }
  static async teams(req, res, next) {
    try {
      const news = await liquipediaApi.dota.getTeams();
      res.status(200).json(news);
    } catch (error) {
      next(error);
    }
  }
  static async heroes(req, res, next) {
    try {
      const news = await liquipediaApi.dota.getHeroes();
      res.status(200).json(news);
    } catch (error) {
      next(error);
    }
  }
  static async search(req, res, next) {
    try {
      const { search } = req.body;
      // const searchQuery = req.query.search_query
      const url = `${baseApiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${search}+dota+2`;
      const response = await axios.get(url);
      const titles = response.data.items;
      titles.length = Math.min(titles.length, 1);
      res.status(200).json(titles);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller