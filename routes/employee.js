const EmployeeController = require("../controllers/employeeController");
const employeeAuthentication = require("../middlewares/employeeAuthentication");
const employeeAuthorize = require("../middlewares/employeeAuthorize");

const router = require("express").Router();
router.use(employeeAuthentication);
router.get("/mytasks", EmployeeController.getMyTask);
router.patch(
  "/mytasks/:taskId",
  employeeAuthorize,
  EmployeeController.updateTask
);

module.exports = router;
