const router = require("express").Router();
const registerRouter = require("./register");
const loginRouter = require("./login");
const companyRouter = require("./company");
const employeeRouter = require("./employee");
const managerRouter = require("./manager");
const EmployeeController = require("../controllers/employeeController");

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/companies", companyRouter);
router.use("/employees", employeeRouter);
router.use("/managers", managerRouter);
router.get("/memes", EmployeeController.getMeme);

module.exports = router;
