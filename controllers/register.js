const { User } = require("../models");

class Register {
  static async registerUser(req, res, next) {
    try {
      const { username, name, email, password } = req.body;
      const data = await User.create({ username, name, email, password });
      res.status(201).json({
        id: data.id,
        email: data.email,
        name: data.name,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Register;
