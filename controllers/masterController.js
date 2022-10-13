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

}


module.exports = MasterController