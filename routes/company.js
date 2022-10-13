const CompanyController = require("../controllers/companyController");
const ManagerController = require("../controllers/managerController");
const companyAuthentication = require("../middlewares/companyAuthentication");
const companyAuthorize = require("../middlewares/companyAuthorize");

const router = require("express").Router();
router.use(companyAuthentication);
router.post("/addManager", ManagerController.register);
router.get("/managers", CompanyController.getManager);
router.delete(
  "/manager/:id",
  companyAuthorize,
  CompanyController.deleteManager
);

module.exports = router;
