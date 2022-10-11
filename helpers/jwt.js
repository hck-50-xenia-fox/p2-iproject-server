const jwt = require('jsonwebtoken')
const key = process.env.SECRETKEY

const loadToToken = (pyl) => jwt.sign(pyl,key)
const tokenToLoad = (token) => jwt.verify(token,key)

module.exports = {
    loadToToken,
    tokenToLoad
}