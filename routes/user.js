const UserController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.post("/register", UserController.Register);
router.post("/login", UserController.Login);

module.exports = router;
