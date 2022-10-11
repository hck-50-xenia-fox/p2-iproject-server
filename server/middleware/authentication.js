const { verifyTokenToPayload } = require("../helpers/helpers")
const {User} = require("../models")

const  authentication = async (req, res, next) => {

    try {
        const {access_token} = req.headers
        if(!access_token) throw { name : "Invalid Email/Password"}
        const payload = verifyTokenToPayload(access_token)
        // console.log(payload);
        let user = await User.findByPk(payload.id)


        if(!user) throw { name : "Invalid Email/Password"}
      
        req.user = {
            id : user.id,
            username : user.username,
            email : user.email,
            role : user.role
        }

        next()

    } catch (err) {
        next(err)
        
    }

}


module.exports = authentication