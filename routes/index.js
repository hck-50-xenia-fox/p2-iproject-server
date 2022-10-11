const router = require("express").Router();
const registerRouter = require("./register");
const loginRouter = require("./login");
const employeeRouter = require("./employee");

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/employees", employeeRouter);
router.use("/managers", managerRouter);

module.exports = router;
