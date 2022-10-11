const { comparePassword, signToken } = require('../helpers/allHelper');
const {User} = require('../models');


class UserController{
  static async userRegister(req,res,next){
    try {
      const { email, password } = req.body
      const newUser = await User.create({ email, password })
      res.status(201).json({ id: newUser.id, email: newUser.email })
    } catch (error) {
      next(error)
    }
  }
  static async userLogin(req,res,next){
    try {
      const { email, password } = req.body
      if (!email) {
        throw { name: "Email is empty" }
      } else if (!password) {
        throw { name: "Password is empty" }
      }
      const userLogin = await User.findOne({
        where: {
          email
        }
      })
      if (!userLogin) {
        throw { name: 'Invalid' }
      }
      const isValid = comparePassword(password, userLogin.password)
      if (!isValid) {
        throw { name: 'Invalid' }
      }
      const payload = {
        id: userLogin.id
      }
      const access_token = signToken(payload)
      res.status(200).json({ access_token, status : userLogin.status })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController