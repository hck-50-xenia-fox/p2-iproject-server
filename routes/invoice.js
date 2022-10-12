const express = require("express");
const InvoiceController = require("../controllers/invoiceController");
const router = express.Router();

router.get("/", InvoiceController.getAllInvoice);
router.post("/", InvoiceController.addInvoice);
router.get("/generate/:id", InvoiceController.generateInvoice);
router.post("/payment/:id", InvoiceController.generatePayment);
router.delete("/:id", InvoiceController.deleteInvoice);

module.exports = router;
