const express = require("express");
const HistoryController = require("../controllers/historyController");
const router = express.Router();

router.get("/", HistoryController.getAllHistory);
router.get("/report", HistoryController.getReport);

module.exports = router;
