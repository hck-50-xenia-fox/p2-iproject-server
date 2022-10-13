const {User} = require('../models');
const {compareHashPassword} = require('../helpers/bcrypt');
const {signPayloadToToken} = require('../helpers/jwt');
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios');
const nodemailer = require('../helpers/nodemailer');


class UserController{
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
                role: findUser.role
              };
              const access_token = signPayloadToToken(payload);
              res.status(200).json({ access_token, dataUser: payload });
        } catch (error) {
            next(error)
        }
    }

    static async registerPost(req, res, next) {
        try {
          let { username, email, password, phoneNumber, address } = req.body;
    
          let data = await User.create({
            username,
            email,
            password,
            role : "Customer",
            phoneNumber,
            address,
          });
          nodemailer(email)
          res.status(201).json(data);
        } catch (error) {
          next(error)
        }
      }

      static async googleLogin(req, res, next) {
        try {
          const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
          const ticket = await client.verifyIdToken({
            idToken: req.headers.google_token,
            audience: process.env.GOOGLE_CLIENT_ID,
          });
          // console.log(req.headers);
          const payload = ticket.getPayload();
          const [user, created] = await User.findOrCreate({
            where: {
              email: payload.email,
            },
            defaults: {
              username: payload.name,
              role: 'Customer',
              email: payload.email,
              password: 'halo_user',
              address: 'Depok',
              phoneNumber: '0986241',
            },
          });
          const access_token = signPayloadToToken({
            id: user.id,
            email: user.email,
            role: user.role,
            password: user.password,
          });
          let payloadLogin = { id: user.id, role: user.role };
          res.status(200).json({ access_token, role: user.role, username: user.username});
        } catch (error) {
          next(error);
        }
      }

      static async fetchAnimalFact(req, res){
        try {
            const {data} = await axios({
                method: "GET",
                url: "https://meowfacts.herokuapp.com/?count=5"
            })
            let factData = data.data
            res.status(200).json(factData)
        } catch (error) {
            console.log(error)
        }
      }

      static async fetchImageRandom(req, res){
        try {
            const {data} = await axios({
                method: "GET",
                url: "https://api.thecatapi.com/v1/images/search"
            })
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
      }
}

module.exports = UserController