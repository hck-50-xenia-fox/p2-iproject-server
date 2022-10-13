const express = require("express");
const Controller = require("../controllers/Controller");
const router = express.Router();

router.post("/register", Controller.registerUser);
router.post("/login", Controller.loginUser);
router.get("/places", Controller.listPlaces);
router.get('/hotels', Controller.listHotel)
router.get('/attractions', Controller.listAttraction)
router.get('/restaurants', Controller.listRestaurant)
router.get('/covid', Controller.dataCovid)

module.exports = router;
