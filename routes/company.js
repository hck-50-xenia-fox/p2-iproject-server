const CompanyController = require("../controllers/companyController");
const companyAuthentication = require("../middlewares/companyAuthentication");
const companyAuthorize = require("../middlewares/companyAuthorize");

const router = require("express").Router();
router.use(companyAuthentication);
router.get("/managers", CompanyController.getManager);
router.get("/employee", CompanyController.getEmployee);
router.delete(
  "/manager/:id",
  companyAuthorize,
  CompanyController.deleteManager
);

module.exports = router;
