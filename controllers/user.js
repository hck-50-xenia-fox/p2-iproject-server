const { comparePass } = require("../helpers/bcrypt");
const { createSign } = require("../helpers/jwt");
const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");

class Controller {
  static async allUser(req, res, next) {
    try {
      const user = await User.findAll({
        attributes: { exclude: ["password"] },
      });
      res.status(200).json({
        statusCode: 200,
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
      });

      if (!user) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json({
        statusCode: 200,
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createUser(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        role: "Free",
      });

      res.status(201).json({
        statusCode: 201,
        msg: "Create user successfully",
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      if (!user)
        throw { name: "Login failed", msg: "Invalid email or password" };

      const validPass = comparePass(password, user.password);
      if (!validPass)
        throw { name: "Login failed", msg: "Invalid email or password" };

      const token = createSign(
        { id: user.id, email: user.email, role: user.role },
        process.env.SECRET_KEY
      );

      res.status(200).json({
        statusCode: 200,
        msg: "User logged in successfully",
        access_token: token,
        user: user.username,
        role: user.role,
        id: user.id,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userGoogleLogin(req, res, next) {
    try {
      const { jwt } = req.body;
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: jwt,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      const [user, isCreated] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          username: payload.name,
          password: "123456",
          phoneNumber: "0834242234",
          address: "Jakarta",
          role: "Free",
        },
        hooks: false,
      });

      const token = createSign(
        { id: user.id, email: user.email, role: user.role },
        process.env.SECRET_KEY
      );

      const statusCode = isCreated ? 201 : 200;
      res.status(statusCode).json({
        statusCode,
        msg: "User logged in successfully",
        role: "Free",
        id: user.id,
        access_token: token,
        user: user.username,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
