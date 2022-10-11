const jwt = require("jsonwebtoken");

const signToken = (payload) => jwt.sign(payload, "RAHASIA");
const verifyToken = (token) => jwt.verify(token, "RAHASIA");

module.exports = {
  signToken,
  verifyToken,
};
