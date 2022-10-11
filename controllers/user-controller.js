const { tokenSign, passCompare } = require('../helpers');
const { User } = require('../models/index');

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
}

module.exports = UserController;
