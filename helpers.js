const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const passHash = pass => bcrypt.hashSync(pass, 10);
const passCompare = (pass, hash) => bcrypt.compareSync(pass, hash);

const tokenSign = payload => jwt.sign(payload, process.env.SECRET_KEY);
const tokenVerify = token => jwt.verify(token, proceess.env.SECRET_KEY);

module.exports = { passHash, passCompare, tokenSign, tokenVerify };
