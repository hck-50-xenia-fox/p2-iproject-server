const { User } = require('../models');
const {compareHashPassword} = require('../helpers/bcrypt');
const {signPayloadToToken} = require('../helpers/jwt');

class Controller{
    static async loginPost(req, res, next){
        try {
            let {email, password} = req.body
            let findUser = await User.findOne({
                where:{
                    email
                }
            })
            if(!findUser){
                throw {name: "Invalid Email or Password"}
            }
            const compare = compareHashPassword(findUser.password, password)
            if (!compare) {
                throw { name: 'Invalid Email or Password' };
              }
              const payload = {
                id: findUser.id,
                username: findUser.username,
              };
              const access_token = signPayloadToToken(payload);
              res.status(200).json({ access_token, dataUser: payload });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller