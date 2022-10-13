const { User } = require('../models/index')
const { verifyToken } = require("../helpers/jwt")

const authen = async (req, res, next) => {
  try {
    let { access_token } = req.headers

    let payload = verifyToken(access_token)

    let user = await User.findByPk(payload.id)

    req.user = {
      id: user.id,
      email: user.email,
      username: user.username,
      status: user.status
    }
    next()
  } catch (error) {
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: error.errors[0].message })
    } else {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

module.exports = authen