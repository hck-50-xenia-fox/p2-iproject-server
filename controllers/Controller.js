const { User } = require("../models/index");

class Controller {
  static async registerUser(req, res) {
    try {
      let { email, password } = req.body;
      await User.create({
        email,
        password,
      });
      res.status(201).json({ message: "Success registraion" });
    } catch (error) {
        console.log(error);
      if (error === "SequelizeValidationError") {
        res.status(400).json(error.errors[0].message);
      } else {
        res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  }
}

module.exports = Controller;
