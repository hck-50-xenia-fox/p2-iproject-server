const jwt = require('jsonwebtoken')


const secretKey = 'secret'

const signPayload = (payload) => jwt.sign(payload, secretKey)
const verifyPayload = (token) => jwt.verify(token, secretKey)

module.exports = {
    signPayload,
    verifyPayload
}