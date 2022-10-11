const jwt = require("jsonwebtoken");

const payloadToToken = (payload) => jwt.sign(payload, process.env.key);
const tokenToPayload = (token) => jwt.verify(token, process.env.key);

module.exports = { payloadToToken, tokenToPayload };
