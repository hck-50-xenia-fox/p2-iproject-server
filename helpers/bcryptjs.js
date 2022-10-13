const bcryptjs = require('bcryptjs')

const hashPassword = (password) => bcryptjs.hashSync(password)
const compareHash = (password, hash) => bcryptjs.compareSync(password, hash)

module.exports = {
    hashPassword,
    compareHash
}