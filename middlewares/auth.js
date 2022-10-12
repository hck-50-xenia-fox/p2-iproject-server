const { verifyToken } = require("../helpers/allHelper")
const {User} = require('../models');

const authUser = async (req,res,next) =>{
  try {
    const { access_token } = req.headers

    const payload = verifyToken(access_token)
    const userLogin = await User.findByPk(payload.id)
    if (!userLogin) {
      throw { name: "Invalid" }
    }
    req.user = {
      id: userLogin.id
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authUser