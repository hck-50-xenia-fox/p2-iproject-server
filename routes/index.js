const express = require("express");
const UserController = require("../controllers/userController");
const Authentication = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorhandler");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
