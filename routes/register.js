const CompanyController = require("../controllers/companyController");

const router = require("express").Router();

router.post("/companies", CompanyController.register);

module.exports = router;
