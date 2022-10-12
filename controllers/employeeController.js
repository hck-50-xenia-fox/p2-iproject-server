const { Employee, EmployeeTask, Task, Manager } = require("../models");
const { comparePassword } = require("../helpers/encrypt");
const { signToken } = require("../helpers/jwt");
class EmployeeController {
  static async register(req, res, next) {
    try {
      const { firstName, lastName, role, email, password } = req.body;
      await Employee.create({
        firstName,
        lastName,
        role,
        email,
        password,
        ManagerId: req.manager.id,
        CompanyId: req.manager.CompanyId,
      });
      res
        .status(201)
        .json({ message: "Success register employee email " + email });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "Email is required" };
      } else if (!password) {
        throw { name: "Password is required" };
      }
      const findEmployee = await Employee.findOne({ where: { email } });
      if (!findEmployee) {
        throw { name: "Invalid email or password" };
      }
      const validate = comparePassword(password, findEmployee.password);
      if (!validate) {
        throw { name: "Invalid email or password" };
      }
      const payload = {
        id: findEmployee.id,
        email: findEmployee.email,
      };
      const access_token = signToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
  static async getMyTask(req, res, next) {
    try {
      const data = await EmployeeTask.findAll({
        include: {
          model: Task,
        },
        where: {
          EmployeeId: req.employee.id,
          status: "Uncomplete",
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async updateTask(req, res, next) {
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
      await findMyTask.update({
        status: "Completed",
      });
      res.status(200).json({ message: "Successfully Assign task!" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EmployeeController;
