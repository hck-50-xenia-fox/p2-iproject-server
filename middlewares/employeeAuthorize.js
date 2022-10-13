const { EmployeeTask } = require("../models");

async function employeeAuthorize(req, res, next) {
  try {
    const { taskId } = req.params;
    const findMyTask = await EmployeeTask.findOne({
      where: {
        TaskId: taskId,
        EmployeeId: req.employee.id,
      },
    });
    if (!findMyTask) {
      throw { name: "Data not found" };
    }
    if (req.employee.id !== findMyTask.EmployeeId) {
      throw { name: "Forbidden" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = employeeAuthorize;
