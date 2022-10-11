const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const userRouter = require("./users");

router.use("/", userRouter);
router.use(auth);
// get data live football

module.exports = router;
