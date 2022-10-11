const bcrypt = require("bcryptjs");

const changeToHash = (password) => bcrypt.hashSync(password);

const compareHash = (password, hash) => bcrypt.compareSync(password, hash);
module.exports = { changeToHash, compareHash };
