const express = require("express");
const router = express.Router();
const User = require("../controllers/user");
const authentication = require("../middleware/authentication");

router.post("/login", User.userLogin);
router.post("/loginGoogle", User.userGoogleLogin);
router.post("/register", User.createUser);
router.get("/", authentication, User.allUser);
router.get("/:id", authentication, User.getUserById);

module.exports = router;
