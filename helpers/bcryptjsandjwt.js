const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET;

// console.log(secretKey);
const hashPass = (password) => bcrypt.hashSync(password);
const comparePW = (password, hash) => bcrypt.compareSync(password, hash);

const signToken = (payload) => jwt.sign(payload, secretKey);
const verifyToken = (token) => jwt.verify(token, secretKey);

module.exports = { hashPass, comparePW, signToken, verifyToken };
