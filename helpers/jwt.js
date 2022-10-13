const jwt = require("jsonwebtoken");

const signPayloadtoToken = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY);
const verifyTokentoPayload = (token) =>
  jwt.verify(token, process.env.SECRET_KEY);

module.exports = { signPayloadtoToken, verifyTokentoPayload };
