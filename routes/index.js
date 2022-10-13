const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const userRouter = require("./users");
const apiRouter = require("./apis");

router.use("/", userRouter);
router.use(auth);
router.use("/football", apiRouter);

module.exports = router;
