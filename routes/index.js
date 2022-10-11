const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.post("/register", Controller.registerUser);
router.post("/login", Controller.loginUser);
router.get("/places", Controller.listPlaces);
router.get('/hotels', Controller.listHotel)


module.exports = router;
