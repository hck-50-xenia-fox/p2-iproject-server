const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const signPayload = (payload) => jwt.sign(payload, secretKey);
const verifyPayload = (token) => jwt.verify(token, secretKey);

module.exports = { signPayload, verifyPayload };
