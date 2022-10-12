const { comparePass, signToken } = require('../../helpers/helper')
    , { User }                   = require('../../models/')
    , { OAuth2Client }           = require("google-auth-library")
    , chalk                      = require('chalk');

class ControllerSession {

    //todo LOGIN
    // POST /login
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            // CHECK EMAIL AVAILABILITY
            const checkUser = await User.findOne({
                where: { email },
            });

            
            if (!checkUser) {
                throw { name: "CREDENTIAL_INVALID" };
            }
            
            // CHECK & COMPARE PASSWORD
            const checkPassword = comparePass(password, checkUser.password);
            
            // CHECK AND THROW ERROR
            if (!checkPassword) {
                throw { name: "CREDENTIAL_INVALID" };
            }

            // CREATE TOKEN
            const payload = {
                id: checkUser.id,
            };

            
            const access_token = signToken(payload);

            // SEND DATA
            res.status(200).json({
                access_token : access_token,
                message : `User ${checkUser.username} has successfully logged in`,
                username : checkUser.username,
            });

            console.log(chalk.green('SUCCESS FROM CONTROLLER : POST /login'));
        } catch (error) {
            console.log(chalk.red('ERROR FROM LOGIN CONTROLLER : '), error);
            next(error);
        }
    }

    //todo REGISTER
    // POST /register
    static async register(req, res, next) {
        try {
            const data = await User.create(
                ...req.body
            );

            res.status(201).json({
                message: "New user has been created successfully",
                data: {
                    id: data.id,
                    email: data.email,
                    username: data.username,
                },
            });

            console.log(chalk.green('SUCCESS FROM CONTROLLER : POST /login'));
        } catch (error) {
            console.log(chalk.red('ERROR FROM REGISTER CONTROLLER : '), error);
            next(error);
        }
    }

    //todo GOOGLE SIGN IN
    // POST /google-signin
    static async googleSignIn(req, res, next) {
        try {
            const { access_token } = req.body;

            const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

            const ticket = await client.verifyIdToken({
                idToken: access_token,
                audience: process.env.GOOGLE_CLIENT_ID
            });

            const payload = ticket.getPayload();

            const user = await User.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    username: payload.given_name,
                    email: payload.email,
                    password: "passwordGoogle",
                    role: "staff",
                    phoneNumber : '123456',
                    address : 'google'
                },
                hooks: false
            });

            // THROW THE DATA
            const payload2 = {
                id: user[0].id,
            };

            const token = signToken(payload2);

            const username = payload.given_name;

            res.status(200).json({
                statusCode: 200,
                access_token: token,
                username,
            });

            console.log(chalk.green('SUCCESS FROM CONTROLLER : POST /google-signin'));
        } catch (error) {
            console.log(chalk.red('ERROR FROM GOOGLE SIGNIN CONTROLLER : '), error);
            next(error);
        }
    }

    //todo FACEBOOK SIGN IN
}

module.exports = ControllerSession