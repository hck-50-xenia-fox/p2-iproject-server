const bcrypt = require("bcrypt");

function hashPassword(password) {
  return bcrypt.hashSync(password, 6);
}
function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = { hashPassword, comparePassword };
