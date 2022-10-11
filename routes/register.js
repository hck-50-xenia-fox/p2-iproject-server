const CompanyController = require("../controllers/companyController");
const EmployeeController = require("../controllers/employeeController");
const ManagerController = require("../controllers/managerController");

const router = require("express").Router();

router.post("/companies", CompanyController.register);
router.post("/managers", ManagerController.register);
router.post("/employees", EmployeeController.register);

module.exports = router;
