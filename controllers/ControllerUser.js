const express = require("express");
const User = require("../models/user");
const {
  encryptPassword,
  comparePassword,
  signToken,
  verifyToken,
} = require("../helpers/helper");

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
      console.log(err);
    }
  }

static async login(req, res, next) {
    try {
        let { email, password } = req.body
        
    }
    catch (err) {
        console.log(err)
    }
}
}

module.exports = ControllerUser;
