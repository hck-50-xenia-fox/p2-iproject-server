const {User} = require('../models');
const {compareHashPassword} = require('../helpers/bcrypt');
const {signPayloadToToken} = require('../helpers/jwt');
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
            role : "Admin",
            phoneNumber,
            address,
          });
          nodemailer(email)
          res.status(201).json(data);
        } catch (error) {
          next(error)
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