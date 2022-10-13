const jwt = require("jsonwebtoken");
// console.log("ini masuk");
const generateToken = (payload) => {
  // console.log(process.env.SECRET_KEY);
  return jwt.sign(payload, process.env.SECRET_KEY);
};
// console.log(generateToken, "<<<");
const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = { generateToken, verifyToken };
