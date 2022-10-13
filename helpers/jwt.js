const jwt = require('jsonwebtoken')

const signToken = (payload) => jwt.sign(payload, process.env.SECRET_KEY)
const verifyToken = (token) => jwt.verify(token, process.env.SECRET_KEY)

module.exports = { signToken, verifyToken }