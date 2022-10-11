const CompanyController = require("../controllers/companyController");
const EmployeeController = require("../controllers/employeeController");
const ManagerController = require("../controllers/managerController");

const router = require("express").Router();

router.post("/companies", CompanyController.login);
router.post("/managers", ManagerController.login);
router.post("/employees", EmployeeController.login);

module.exports = router;
