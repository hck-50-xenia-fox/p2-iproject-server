const bcrypt = require("bcryptjs");

const createHashFromPass = (password) => bcrypt.hashSync(password);

const compareHashWithPass = (password, hash) =>
  bcrypt.compareSync(password, hash);

module.exports = { createHashFromPass, compareHashWithPass };
