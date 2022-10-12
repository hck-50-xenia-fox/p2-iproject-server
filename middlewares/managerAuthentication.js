const { verifyToken } = require("../helpers/jwt");
const { Manager } = require("../models");

async function managerAuthentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "Not Login" };
    }
    const verify = verifyToken(access_token);
    if (!verify) {
      throw { name: "Not Login" };
    }
    console.log(verify);
    const findManager = await Manager.findOne({
      where: { email: verify.email },
    });
    if (!findManager) {
      throw { name: "Not Login" };
    }
    req.manager = {
      id: findManager.id,
      email: findManager.email,
      CompanyId: findManager.CompanyId,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = managerAuthentication;
