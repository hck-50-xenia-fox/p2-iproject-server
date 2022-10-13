const express = require("express");
const router = express.Router();

const Login = require("../controllers/login");
const Register = require("../controllers/register");
const Movie = require("../controllers/movie");
const Payment = require("../controllers/payment");
const Rent = require("../controllers/rents");
const Authentication = require("../middlewares/Authentication");

router.post("/login", Login.loginUser);
router.post("/google-signin", Login.googleSignIn);
router.post("/register", Register.registerUser);
router.get("/movies", Movie.fetchMovies);

router.use(Authentication);
router.post("/payment/:id", Payment.paymentUser);
router.post("/rents", Rent.addRents);
router.get("/mypurchase", Rent.fetchRents);

module.exports = router;
