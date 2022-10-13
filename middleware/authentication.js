const { verifyPayload } = require("../helpers/jwt")
const { User } = require('../models/index')

async function authentication (req, res, next) {
    try {
        let access_token = req.headers.access_token

        if (!access_token) {
            throw {name: 'User is not logged in'}
        }

        let payload = verifyPayload(access_token)
        let user = await User.findByPk(payload.id)

        if (!user) {
            throw {name: 'Not Found'}
        }

        req.user = {
            id: user.id,
            email : user.email,
            username : user.username
        }

        next()
    } catch (error) {
        if (error.name === 'User is not logged in') {
            res.status(401).json({message: 'User is not logged in'})
        } else if (error.name === 'Not Found') {
            res.status(404).json({message: 'Account is not registered'})
        } else if (error.name === 'JsonWebTokenError') {
            res.status(401).json({message: 'Invalid Token'})
        }
    }
}

module.exports = authentication