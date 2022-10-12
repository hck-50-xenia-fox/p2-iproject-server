const router = require("express").Router();
const { authentication } = require("../middleware/Authentication");
const Controller = require("../controllers/controller");

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.post('/login-facebook', Controller.loginFacebook)
router.use(authentication);
router.get("/course", Controller.showAllCourse);
router.get("/course/:courseId", Controller.detailCourse);
router.post("/mycourse", Controller.addMyCourse);
router.put('/mycourse', Controller.putMyCourse)
router.get("/mycourse/:courseId", Controller.showMyCourse);
router.delete('/mycourse/:courseId', Controller.deleteCourse)

module.exports = router;
