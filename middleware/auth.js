const { readToken } = require('../helpers/jwt');

let authenticate = async (req, res, next) => {
  try {
    const {access_toqen} = req.headers
    if(!access_toqen) throw{name: 'Not Login'}
    await readToken(req.headers.access_toqen)
    return next();
  } catch (err) {
    next(err)
  }
}

module.exports = {authenticate}