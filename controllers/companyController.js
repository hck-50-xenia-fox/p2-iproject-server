const { comparePassword } = require("../helpers/encrypt");
const { signToken } = require("../helpers/jwt");
const { Company, Manager, Employee } = require("../models");

class CompanyController {
  static async register(req, res, next) {
    try {
      const { name, companyEmail, companyPassword } = req.body;
      await Company.create({
        name,
        companyEmail,
        companyPassword,
      });
      res
        .status(201)
        .json({ message: "Success register company email " + companyEmail });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { companyEmail, companyPassword } = req.body;
      if (!companyEmail) {
        throw { name: "Email is required" };
      } else if (!companyPassword) {
        throw { name: "Password is required" };
      }
      const findCompany = await Company.findOne({ where: { companyEmail } });
      if (!findCompany) {
        throw { name: "Invalid email or password" };
      }
      const validate = comparePassword(
        companyPassword,
        findCompany.companyPassword
      );
      if (!validate) {
        throw { name: "Invalid email or password" };
      }
      const payload = {
        id: findCompany.id,
        email: findCompany.companyEmail,
      };
      const access_token = signToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
  static async getEmployee(req, res, next) {
    try {
      const data = await Employee.findAll({
        where: {
          CompanyId: req.company.id,
          include: {
            model: Manager,
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
  static async getManager(req, res, next) {
    try {
      const data = await Manager.findAll({
        where: {
          CompanyId: req.company.id,
        },
        include: {
          model: Employee,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async deleteManager(req, res, next) {
    try {
      const { id } = req.params;
      const findManager = await Manager.findByPk(id);
      if (!findManager) {
        throw { name: "Data not found" };
      }
      await Manager.destroy({
        where: { id },
      });
      res
        .status(200)
        .json({ message: "Success deleted manager with id " + id });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CompanyController;
