const { tokenSign, passCompare } = require('../helpers/helpers');
const { User } = require('../models/index');
const { OAuth2Client } = require('google-auth-library');

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const findUser = await User.findOne({ where: { email } });
      if (!findUser) throw { name: 'Unauthorized' };

      const isValid = passCompare(password, findUser.password);

      if (!isValid) throw { name: 'Unauthorized' };

      const payload = {
        id: findUser.id,
        email: findUser.email,
        name: findUser.name,
        fullName: findUser.fullName,
      };

      const access_token = tokenSign(payload);

      res.status(200).json({
        access_token,
        userId: findUser.id,
        role: findUser.role,
        name: findUser.name,
        status: findUser.status,
      });
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, name, password, fullName, address } = req.body;
      const response = await User.create({
        email,
        password,
        name,
        role: 'User',
        fullName,
        address,
      });

      res.status(201).json({
        id: response.id,
        email: response.email,
      });
    } catch (err) {
      next(err);
    }
  }

  static async adminRegister(req, res, next) {
    try {
      const { email, name, password, fullName, address } = req.body;
      const response = await User.create({
        email,
        password,
        name,
        role: 'Admin',
        fullName,
        address,
      });

      res.status(201).json({
        id: response.id,
        email: response.email,
      });
    } catch (err) {
      next(err);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      //token from client
      const { credential } = req.body;

      const client = new OAuth2Client(process.env.CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: process.env.CLIENT_ID,
      });

      const { name: fullName, email, given_name: name } = ticket.getPayload();
      console.log(fullName, 'full', name, 'given');

      const [findUser] = await User.findOrCreate({
        where: { email },
        hooks: false,

        defaults: {
          name,
          email,
          fullName,
          password: 'wop',
          role: 'User',
          status: 'Free',
          address: 'jalan mana?',
        },
      });

      const payload = {
        id: findUser.id,
        name: findUser.name,
        email: findUser.email,
      };

      const access_token = tokenSign(payload);

      res.status(200).json({
        access_token,
        userId: findUser.id,
        role: findUser.role,
        name: findUser.name,
        status: findUser.status,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
