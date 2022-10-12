const express = require("express")
const User = require('../models/user')
const {
    encryptPassword,
    comparePassword,
    signToken,
    verifyToken,
} = require("../helpers/helper");

class ControllerUser {

    static async login(req, res, next) {
        
    }

}

module.exports = ControllerUser