const { User } = require('../models/index')
const { compareHashedPassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const axios = require('axios')
const mailer = require('../helpers/mailer')


const headers = {
  Authorization: 'Bearer ' + process.env.lichessToken,
}

class MasterController {




}


module.exports = MasterController