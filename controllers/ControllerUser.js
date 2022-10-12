const express = require("express");
const User = require("../models/user");
const {
  encryptPassword,
  comparePassword,
  signToken,
  verifyToken,
} = require("../helpers/helper");

class ControllerUser {
  static register(req, res, next) {
    User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
    })
      .then((created) => {
        res.status(201).json(created);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static login(req, res, next) {
    User.find()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch(console.log);
  }
}

module.exports = ControllerUser;
