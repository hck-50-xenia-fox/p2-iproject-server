const axios = require("axios");
const { json } = require("body-parser");

class Movie {
  static async fetchMovies(req, res, next) {
    try {
      const { search } = req.query;
      let data = {};
      if (!search) {
        data = await axios({
          url: "https://imdb-api.com/en/API/MostPopularMovies/k_yml2vwdz",
          method: "get",
        });
      } else {
        data = await axios({
          url: "https://imdb-api.com/en/API/Search/k_yml2vwdz/" + search,
          method: "get",
        });
      }
      res.status(200).json({
        data: data.data,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Movie;

// stripe
//zendit
//midtrans
