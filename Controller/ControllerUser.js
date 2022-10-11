const { hashPassword, compareHash } = require("../helpers/bcryptjs")
const { signPayload } = require("../helpers/jwt")
const {User} = require("../models")


class ControllerUser{
    static async loginUser(req, res, next) {
        try {
            let {email, password} = req.body
            let data = await User.findOne({
                where: { email }
            })
            if(!data) {
                throw { name : 'Email/Password_Incorrect'}
            }
            let comparePassword = compareHash(password, data.password)
            if(!comparePassword) {
                throw { name : 'Email/Password_Incorrect'}
            }
            let access_token = signPayload({
                id: data.id,
                username: data.username,
                email: data.email
            })
            res.status(200).json({access_token, username: data.username, email:data.email})
        } catch (error) {
            next(error)
        }
    }
    static async registerUser(req, res, next) {
        try {
            let {username, email, password} = req.body
            let data = await User.create({
                username,
                email,
                password
            })
            res.status(201).json({message: 'Success Register'})
        } catch (error) {
            next(error)
        }
    }
}






module.exports = ControllerUser