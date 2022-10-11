const userController = require('../controllers/userController')
const authentication = require('../middleware/authentication')

const router = require('express').Router()


router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.use(authentication)
router.get("/test", (req, res) => res.send("Hello World!"));









module.exports = router