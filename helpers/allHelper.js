const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const secretKey = "Lisa"

function hashPassword (password){
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  return hash
}

function comparePassword (password,hash){
  const isValid = bcrypt.compareSync(password, hash)
  return isValid
}

function signToken (payload){
  const access_token = jwt.sign(payload,secretKey)

  return access_token
}

function verifyToken (token){
  const payload = jwt.verify(token,secretKey)

  return payload
}

module.exports = {
  hashPassword,
  comparePassword,
  signToken,
  verifyToken
}