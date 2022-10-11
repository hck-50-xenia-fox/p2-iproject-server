const ManagerController = require("../controllers/managerController");
const managerAuthentication = require("../middlewares/managerAuthentication");
const managerAuthorize = require("../middlewares/managerAuthorize");

const router = require("express").Router();
router.use(managerAuthentication);
router.post("/postTask", ManagerController.postTask);
router.post("/employeeTasks", ManagerController.addEmployeeTask);
router.delete("/:employeeId", managerAuthorize, ManagerController.fireEmployee);

module.exports = router;
