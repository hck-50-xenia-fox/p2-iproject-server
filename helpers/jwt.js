const jwt = require('jsonwebtoken')



const signPayload = (payload) => jwt.sign(payload, process.env.SECRET_KEY)
const verifyPayload = (token) => jwt.verify(token, process.env.SECRET_KEY)

module.exports = {
    signPayload,
    verifyPayload
}