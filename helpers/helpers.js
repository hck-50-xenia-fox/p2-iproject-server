const bcrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jsonwebtoken');

const passHash = pass => bcrypt.hashSync(pass, 10);
const passCompare = (pass, hash) => bcrypt.compareSync(pass, hash);

const tokenSign = payload => jwt.sign(payload, process.env.SECRET_KEY);
const tokenVerify = token => jwt.verify(token, process.env.SECRET_KEY);

const formatMessage = (username, text) => {
  return {
    username,
    text,
    time: moment().format('h:mm a'),
  };
};

module.exports = {
  passHash,
  passCompare,
  tokenSign,
  tokenVerify,
  formatMessage,
};
