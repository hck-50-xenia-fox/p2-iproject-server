const express = require("express");
const UserController = require("../controllers/userController");
const Authentication = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorhandler");
const router = express.Router();
const UserRouter = require("./user");

router.use(UserRouter);
router.use(Authentication);
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use(errorHandler);
module.exports = router;
