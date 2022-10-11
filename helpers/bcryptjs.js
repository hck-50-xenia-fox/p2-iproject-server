const bcrypt = require("bcryptjs");

const changeToHash = (password) => bcrypt.hashSync(password);

const compareHash = (password, hash) => bcrypt.compareSync(password, hash);

// function hashPassword(value) {
//   var salt = bcrypt.genSaltSync(10);
//   var hash = bcrypt.hashSync(value, salt);
//   return hash;
// }
module.exports = { changeToHash, compareHash };
