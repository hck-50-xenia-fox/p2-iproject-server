const express = require("express");
const ApiController = require("../controllers/apiController");
const router = express.Router();

router.get("/live-score", ApiController.getLivScore);
router.get("/premier-league", ApiController.getPremierLeague);
router.get("/highlight", ApiController.getVideoHighlight);

module.exports = router;
