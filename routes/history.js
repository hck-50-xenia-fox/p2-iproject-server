const express = require("express");
const HistoryController = require("../controllers/historycontroller");
const router = express.Router();

router.get("/", HistoryController.getAllHistory);
router.get("/report", HistoryController.getReport);

module.exports = router;
