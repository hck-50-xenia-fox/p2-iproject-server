const { MyPurchase } = require("../models");
const axios = require("axios");

class Rent {
  static async addRents(req, res, next) {
    try {
      // console.log(req.body, "===req.body");
      const { id } = req.user;
      const { movieId } = req.body;
      // ambil axios dulu datanya dri id movienya trus di simpan ke nanti waktu create. bkin table baru
      // console.log("masuk pak eko");
      const findMovie = await axios({
        url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=b9e2cf79dd8e02fbc2059d6dbfc30dd6`,
        method: "get",
      });
      console.log(findMovie.data, "===");
      const createdPurchase = await MyPurchase.create({
        UserId: id,
        MovieId: movieId,
        status: "Rented",
        time: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        title: findMovie.data.original_title,
        image:
          "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
          findMovie.data.poster_path,
        description: findMovie.data.overview,
        vote: findMovie.data.vote_average,
        totalVote: findMovie.data.vote_count,
      });
      console.log(createdPurchase, ">>>>");

      console.log(new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)),
        res.status(201).json({
          message: "You have rented",
        });
    } catch (err) {
      next(err);
    }
  }

  static async fetchRents(req, res, next) {
    try {
      const { id } = req.user;
      const response = await MyPurchase.findAll({ where: { UserId: id } });
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Rent;
