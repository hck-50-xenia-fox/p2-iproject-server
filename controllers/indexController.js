const { comparePassword } = require('../helpers/bcrypt')
const { signPayload } = require('../helpers/jwt')
const { User } = require('../models/index')

class indexController {
    static async register (req, res, next) {
        try {
            const { username, email, password } = req.body

            await User.create({
                username,
                email,
                password
            })

            res.status(201).json({message: 'your account is now registered, Trainer.'})
            
        } catch (error) {
            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstrainError') {
                res.status(400).json({message: error.errors[0].message})
            } else {
                res.status(500).json({message:'Internal Server Error'})
            }
        }
    }
    
    static async login (req, res, next) {
        try {
            const { email, password } = req.body

            if(!email || !password) {
                throw {name: 'Email/password is required'}
            }

            let data = await User.findOne({
                where : {
                    email
                }
            })

            if (!data) {
                throw {name: 'Not Found'}
            }

            let isValid = comparePassword(password, data.password)

            if (!isValid) {
                throw {name: 'Not Found'}
            }

            let payload = {
                id: data.id,
                email: data.email,
                username: data.username
            }

            let access_token = signPayload(payload)

            res.status(200).json({
                access_token,
                username: data.username
            })
            
        } catch (error) {
            if (error.name === 'Email/password is required') {
                res.status(400).json({message: 'Email/password is required'})
            } else if (error.name === 'Not Found') {
                res.status(401).json({message: 'Invalid email/password'})
            } else {
                res.status(500).json({message: 'Internal Server Error'})
            }
        }
    }

    static async updateProfile (req, res, next) {
        try {
            const UserId = req.user.id
            const { username, email, photo } = req.body

            let user = await User.findByPk(UserId)

            if (!user) {
                throw {name: 'User not found'}
            }

            await User.update({
                username,
                email,
                photo   
            },{
                where : {
                    id : UserId
                }
            })

            res.status(200).json({message: 'Your profile has been updated successfully'})

        } catch (error) {
            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstrainError') {
                res.status(400).json({message: error.errors[0].message})
            } else if (error.name === 'User not found') {
                res.status(404).json({message: "User's profile with this ID is registered"})
            } else {
                res.status(500).json({message: 'Internal Server Error'})
            }
        }
    }
}

module.exports = indexController