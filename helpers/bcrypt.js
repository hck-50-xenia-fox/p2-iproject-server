const bcrypt = require('bcryptjs')

const hashedPassword = (password) => bcrypt.hashSync(password)
const compareHashedPassword = (password, hash) => bcrypt.compareSync(password, hash)

module.exports = { hashedPassword, compareHashedPassword, }