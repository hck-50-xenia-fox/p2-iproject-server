const router = require("express").Router();
const { authentication } = require("../middleware/Authentication");
const Controller = require("../controllers/controller");

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.use(authentication);
router.get("/course", Controller.showAllCourse);
router.get("/course/:courseId", Controller.detailCourse);
router.post("/mycourse", Controller.addMyCourse);
router.get("/mycourse/:courseId", Controller.showMyCourse);

module.exports = router;
