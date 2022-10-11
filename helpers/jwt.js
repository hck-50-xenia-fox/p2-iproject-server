const jwt = require('jsonwebtoken')

const signPayload = (payload) => jwt.sign(payload, 'INI_SECRET_KEY')
const verifyPayload = (token) => jwt.verify(token, 'INI_SECRET_KEY')

module.exports = {
    signPayload,
    verifyPayload
}