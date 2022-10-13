const { User } = require('../models/index')
const { compareHashedPassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const axios = require('axios')
const mailer = require('../helpers/mailer')


const headers = {
  Authorization: 'Bearer ' + process.env.lichessToken,
}

class MasterController {

  static async register(req, res, next) {
    try {
      // console.log(req.body, "<<<< masuk")
      const { username, email, password } = req.body
      const newUser = await User.create({ username, email, password })

      mailer(email)

      res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({
        where: {
          email
        }
      })

      const isValid = compareHashedPassword(password, user.password)
      if (!isValid) {
        throw { name: "Forbidden" }
      }

      const payload = {
        id: user.id
      }

      const access_token = signToken(payload)

      res.status(200).json({ access_token })

    } catch (error) {
      next(error)
    }
  }

  static async fetchChessProfile(req, res, next) {
    try {
      const { username, status } = req.user
      const { data } = await axios.get(`https://api.chess.com/pub/player/${username}`)

      res.status(200).json({ data, status })
    } catch (error) {
      next(error)
    }
  }

  static async fetchChessStats(req, res, next) {
    try {
      const { username } = req.user
      const { data } = await axios.get(`https://api.chess.com/pub/player/${username}/stats`)

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async fetchTopPlayer(req, res, next) {
    try {
      // console.log("masuk")
      const { data } = await axios.get("https://lichess.org/api/player")
      // console.log(data)
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async fetchStreamer(req, res, next) {
    try {

      const { data } = await axios.get('https://api.chess.com/pub/streamers')

      const dataStreamer = data.streamers.slice(0, 3)

      res.status(200).json({ data: dataStreamer })

    } catch (error) {
      next(error)
    }
  }

  static async fetchPuzzle(req, res, next) {
    try {
      // console.log("masuk")
      const puzzle1 = await axios.get(`https://api.chess.com/pub/puzzle`)
      const puzzle2 = await axios.get(`https://api.chess.com/pub/puzzle/random`)

      const puz1 = puzzle1.data
      const puz2 = puzzle2.data

      const data = [puz1, puz2]

      res.status(200).json({ data })
    } catch (error) {
      next(error)
    }
  }

  static async fetchDataYoutube(req, res, next) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/search/',
        params: { q: 'hikaru', hl: 'en', gl: 'US' },
        headers: {
          'X-RapidAPI-Key': 'ba0adeaaadmshf54087cc3ac0c23p1307b8jsn795dfc92afc6',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      })

      res.status(200).json(data.contents.slice(0, 6))
    } catch (error) {
      next(error)
    }
  }

}


module.exports = MasterController