const express = require("express");
const User = require("../models/user");
const {
  encryptPassword,
  comparePassword,
  signToken,
  verifyToken,
} = require("../helpers/helper");
const {
  signPayload,
} = require("../../../Challenges/p2-cms-integration-server/helpers/helper");

class ControllerUser {
  static async register(req, res, next) {
    try {
      let user = await User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      });
      res.status(201).json({
        message: "User was registered successfully!",
        name: user.name,
        email: user.email,
      });
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw { name: "EMAIL_IS_REQUIRED" };
      }
      if (!password) {
        throw { name: "PASSWORD_IS_REQUIRED" };
      }
      let findUser = await User.findOne({
        where: { email },
      });
      if (!findUser) {
        throw { name: "INVALID_CREDENTIAL" };
      }
      let checkPassword = comparePassword(password, findUser.password);
      if (!checkPassword) {
        throw { name: "INVALID_CREDENTIAL" };
      }
      const payload = {
        id: findUser.id,
        name: findUser.name,
      };
      const access_token = signPayload(payload);
      res.status(200).json({
        access_token,
        name: findUser.name,
      });
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerUser;
