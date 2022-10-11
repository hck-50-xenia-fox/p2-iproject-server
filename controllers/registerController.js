const { User } = require('../models');

class Controller {
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
      res.status(201).json(data);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller;
