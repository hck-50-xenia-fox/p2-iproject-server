const express = require("express");
const router = express.Router();

const Login = require("../controllers/login");
const Register = require("../controllers/register");

router.post("/login", Login.loginUser);
router.post("/register", Register.registerUser);

module.exports = router;
