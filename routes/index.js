const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.post("/register", Controller.registerUser);

module.exports = router;
