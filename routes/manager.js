const ManagerController = require("../controllers/managerController");

const router = require("express").Router();

router.post("/postTask", ManagerController.postTask);
router.post("/employeeTasks", ManagerController.addEmployeeTask);
router.delete("/:employeeId", ManagerController.fireEmployee);

module.exports = router;
