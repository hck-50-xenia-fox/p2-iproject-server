const { hashPassword, compareHash } = require("../helpers/bcryptjs")
const {User} = require("../models")

///tes tes
hashPassword
class ControllerUser{
    static async loginUser(req, res, next) {
        try {
            let {email, password} = req.body
            let data = await User.findOne({
                where: { email }
            })
            if(!data) {
                console.log(error)
            }
            let comparePassword = compareHash(password, data.password)
            if(!comparePassword) {
                console.log(error)
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}






module.exports = ControllerUser