const { verifyToken } = require("../helpers/jwt");
const { Company } = require("../models");

async function companyAuthentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "Not Login" };
    }
    const verify = verifyToken(access_token);
    if (!verify) {
      throw { name: "Not Login" };
    }
    const findCompany = await Company.findOne({
      where: { companyEmail: verify.email },
    });
    if (!findCompany) {
      throw { name: "Not Login" };
    }
    req.company = {
      id: findCompany.id,
      email: findCompany.companyEmail,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = companyAuthentication;
