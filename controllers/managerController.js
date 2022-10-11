const { Manager, Task, Employee, EmployeeTask } = require("../models");
const { comparePassword } = require("../helpers");
const { signToken } = require("../helpers/jwt");

class ManagerController {
  static async register(req, res, next) {
    try {
      const { firstName, lastName, role, email, password, CompanyId } =
        req.body;
      await Manager.create({
        firstName,
        lastName,
        role,
        email,
        password,
        CompanyId,
      });
      res
        .status(201)
        .json({ message: "Success register manager email " + email });
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
      const findManager = await Manager.findOne({ where: { email } });
      if (!findManager) {
        throw { name: "Invalid email or password" };
      }
      const validate = comparePassword(password, findManager.companyPassword);
      if (!validate) {
        throw { name: "Invalid email or password" };
      }
      const payload = {
        id: findManager.id,
        ManagerEmail: findManager.email,
      };
      const { access_token } = signToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
  static async postTask(req, res, next) {
    try {
      const { title, description } = req.body;
      await Task.create({
        title,
        description,
      });
      res.status(201).json({ message: "Successfully added new task" });
    } catch (error) {
      next(error);
    }
  }
  static async addEmployeeTask(req, res, next) {
    try {
      const { TaskId, EmployeeId } = req.body;
      await EmployeeTask.create({
        TaskId,
        EmployeeId,
      });
      res.status(201).json({
        message: "Successfully added task to employee with id " + EmployeeId,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getEmployee(req, res, next) {
    try {
      const data = await Employee.findAll({
        where: {
          ManagerId: req.manager.id,
          include: {
            model: EmployeeTask,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async fireEmployee(req, res, next) {
    try {
      const { employeeId } = req.params;
      const findEmployee = await Employee.findByPk(employeeId);
      if (!findEmployee) {
        throw { name: "Data not found" };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ManagerController;
