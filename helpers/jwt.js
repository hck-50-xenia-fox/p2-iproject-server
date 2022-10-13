const jwt = require('jsonwebtoken');

const secretKey = "ini_secret"

const signPayloadToToken = (payload) => jwt.sign(payload, secretKey)
const verifyTokenToPayload = (token) => jwt.verify(token, secretKey)

module.exports = {signPayloadToToken, verifyTokenToPayload}