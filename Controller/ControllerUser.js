const { hashPassword, compareHash } = require("../helpers/bcryptjs")
const { signPayload } = require("../helpers/jwt")
const {User} = require("../models")
const { OAuth2Client } = require("google-auth-library");
const clientId = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(clientId);


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
    static async googleLogin(req, res, next) {
        try {
            const { google_token } = req.headers;
            // console.log(google_token, "<<<<<<<");
      
            const ticket = await client.verifyIdToken({
              idToken: google_token,
              audience: clientId, // Specify the CLIENT_ID of the app that accesses the backend
              // Or, if multiple clients access the backend:
              //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            // console.log(ticket, '===== ini tiket')
            const payload = ticket.getPayload();
            const [user, created] = await User.findOrCreate({
              where: { email: payload.email },
              defaults: {
                email: payload.email,
                username: payload.given_name,
                password: "asd123",
              },
              hooks: false,
            });
            const access_token = signPayload({ id: user.id });
            const username = user.username;
            // const id = user.id;
            const email = user.email
            res.status(200).json({ access_token, username, email });
          } catch (error) {
            console.log(error);
            res.status(500).json({ error });
          }
        
    }
}






module.exports = ControllerUser