const axios = require("axios");
const apiUrl = "https://v3.football.api-sports.io";

class ApiController {
  static async getLivScore(req, res, next) {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${apiUrl}/fixtures?live=all`,
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY_FOOTBALL,
          "X-RapidAPI-Host": "v3.football.api-sports.io",
        },
      });

      let fixtureData = data.response;

      let result = fixtureData.map((el) => ({
        date: el.fixture.date,
        league: el.league.name,
        country: el.league.country,
        referee: el.fixture.referee,
        venue: el.fixture.venue.name,
        city: el.fixture.venue.city,
        minutes: el.fixture.status.elapsed,
        status: el.fixture.status.long,
        homeTeam: el.teams.home.name,
        scoreHomeTeam: el.goals.home,
        homeTeamLogo: el.teams.home.logo,
        awayTeam: el.teams.away.name,
        scoreAwayTeam: el.goals.away,
        awayTeamLogo: el.teams.away.logo,
      }));

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async getPremierLeague(req, res, next) {
    try {
      let past = new Date();
      let future = new Date();
      future.setDate(future.getDate() + 30);
      past.setDate(past.getDate() - 30);

      let futureDate = future.toISOString().slice(0, 10);
      // console.log(futureDate);
      let pastDate = past.toISOString().slice(0, 10);
      // console.log(pastDate);
      let year = new Date().getFullYear();

      const { data } = await axios({
        method: "GET",
        url: `${apiUrl}/fixtures?league=39&season=${year}&from=${pastDate}&to=${futureDate}`,
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY_FOOTBALL,
          "X-RapidAPI-Host": "v3.football.api-sports.io",
        },
      });

      let fixtureData = data.response;

      let result = fixtureData.map((el) => ({
        date: el.fixture.date,
        league: el.league.name,
        country: el.league.country,
        referee: el.fixture.referee,
        venue: el.fixture.venue.name,
        city: el.fixture.venue.city,
        minutes: el.fixture.status.elapsed,
        status: el.fixture.status.long,
        homeTeam: el.teams.home.name,
        scoreHomeTeam: el.goals.home,
        homeTeamLogo: el.teams.home.logo,
        awayTeam: el.teams.away.name,
        scoreAwayTeam: el.goals.away,
        awayTeamLogo: el.teams.away.logo,
      }));

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async getVideoHighlight(req, res, next) {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://free-football-soccer-videos1.p.rapidapi.com/v1/",
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY_FOOTBALL_VIDEO,
          "X-RapidAPI-Host": "free-football-soccer-videos1.p.rapidapi.com",
        },
      });

      let result = data.map((el) => ({
        title: el.title,
        url: (el.embed = el.embed.match(/src='(.*?)'/)[1].replace()),
        thumbnail: el.thumbnail,
        date: el.date,
      }));

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ApiController;
