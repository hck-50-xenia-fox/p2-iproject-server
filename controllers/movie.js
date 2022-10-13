const axios = require("axios");
// const { json } = require("body-parser");

class Movie {
  static async fetchMovies(req, res, next) {
    try {
      // console.log(req.query.search);
      const { search, page } = req.query;
      // let { data } = await axios({
      //   url: "https://imdb-api.com/en/API/MostPopularMovies/k_yml2vwdz",
      //   method: "get",
      // });
      let { data } = await axios({
        url:
          "https://api.themoviedb.org/3/movie/popular?api_key=b9e2cf79dd8e02fbc2059d6dbfc30dd6" +
          `&page=${page}`,
        method: "get",
      });
      // console.log(data.results);
      let result = data.results.map((data) => {
        return {
          id: data.id,
          title: data.original_title,
          image:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
            data.poster_path,
          description: data.overview,
          vote: data.vote_average,
          totalVote: data.vote_count,
        };
      });
      // console.log(result);
      if (search) {
        result = data.results.filter((el) => {
          let check = el.original_title
            .toLowerCase()
            .includes(search.toLowerCase());
          if (check) {
            result = el.map((data) => {
              return {
                id: data.id,
                title: data.original_title,
                image:
                  "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
                  data.poster_path,
                description: data.overview,
                vote: data.vote_average,
                totalVote: data.vote_count,
              };
            });
          }
          // console.log(check);
        });
      }
      // console.log(result);
      res.status(200).json({
        result,
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
