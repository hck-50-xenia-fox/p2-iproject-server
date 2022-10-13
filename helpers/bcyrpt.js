const bcrypt = require('bcryptjs')

const hashPass = (pass) => bcrypt.hashSync(pass)
const compare = (hash,pass) => bcrypt.compareSync(pass,hash)

module.exports ={
    hashPass,
    compare
}