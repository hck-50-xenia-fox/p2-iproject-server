const { Manager } = require("../models");

async function companyAuthorize(req, res, next) {
  try {
    const { id } = req.params;
    const findManager = await Manager.findByPk(id);
    if (!findManager) {
      throw { name: "Data not found" };
    }
    if (req.company.id !== findManager.CompanyId) {
      throw { name: "Forbidden" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = companyAuthorize;
