const express = require("express");
const UserController = require("../controllers/userController");
const Authentication = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorhandler");
const router = express.Router();
const UserRouter = require("./user");
const InventoryRouter = require("./inventory");
const InvoiceRouter = require("./invoice");
const historyRouter = require("./history");

router.use(UserRouter);
router.use(Authentication);
router.get("/", (req, res) => {
  res.send("Hello World");
});
router.use("/stock", InventoryRouter);
router.use("/invoice", InvoiceRouter);
router.use("/history", historyRouter);

router.use(errorHandler);
module.exports = router;
