const express = require('express')
const ControllerMotorcycle = require('../controllers/ControllerMotorcycle')
const router = express.Router()

router.get('/adv150', ControllerMotorcycle.getADV )
router.get('/pcx150', ControllerMotorcycle.getPCX )
router.get('/scoopy110', ControllerMotorcycle.getScoopy )
router.get('/nmax155', ControllerMotorcycle.getNMAX )
router.get('/xmax300', ControllerMotorcycle.getXMAX )
router.get('/primavera150', ControllerMotorcycle.getVespa )


module.exports = router