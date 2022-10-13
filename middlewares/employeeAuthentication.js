const { verifyToken } = require("../helpers/jwt");
const { Employee } = require("../models");

async function employeeAuthentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "Not Login" };
    }
    const verify = verifyToken(access_token);
    if (!verify) {
      throw { name: "Not Login" };
    }
    const findEmployee = await Employee.findOne({
      where: { email: verify.email },
    });
    if (!findEmployee) {
      throw { name: "Not Login" };
    }
    req.employee = {
      id: findEmployee.id,
      email: findEmployee.email,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = employeeAuthentication;
