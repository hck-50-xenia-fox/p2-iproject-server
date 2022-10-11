const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hashSync(password)
const compareHashPassword = (hash, password) => bcrypt.compareSync(password, hash)

module.exports = {hashPassword, compareHashPassword}