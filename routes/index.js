const express = require("express");
const router = express.Router();

const Login = require("../controllers/login");
const Register = require("../controllers/register");
const Movie = require("../controllers/movie");

router.post("/login", Login.loginUser);
router.post("/register", Register.registerUser);
router.get("/movies", Movie.fetchMovies);

module.exports = router;
