const { Employee } = require("../models");

async function managerAuthorize(req, res, next) {
  try {
    const { employeeId } = req.params;
    const findEmployee = await Employee.findByPk(employeeId);
    if (!findEmployee) {
      throw { name: "Data not found" };
    }
    if (!req.manager.id !== findEmployee.ManagerId) {
      throw { name: "Forbidden" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = managerAuthorize;
