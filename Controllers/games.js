const axios = require("axios");
const localUrl = 'http://localhost:3000'
const igdbUrl = 'https://api.igdb.com/v4'


class ControllerGames {
    
    //? ALL GAMES
    // GET https://api.igdb.com/v4/games
    static async readAllGames (res, res, next){
        try {
            const games = await axios({
                url: `${igdbUrl}/games`,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID' : process.env.TWITCH_CLIENT_ID,
                    'Authorization' : `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
                },
                data: "fields category,cover,genres,involved_companies,name,rating,release_dates,screenshots,storyline,summary,tags,themes,url,videos;"
              })
        } catch (error) {
            next(error)
            console.log('ERROR FROM GET ALL GAMES CONTROLLER : ', error);
        }
    }
}

module.exports = ControllerGames