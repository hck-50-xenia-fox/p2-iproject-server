const express = require("express");
const router = express.Router();
const authentication = require("../middleware/Authentication");
const Controller = require("../controllers/controller");
// const router = require("express").Router();

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.post("/login-facebook", Controller.loginFacebook);
router.use(authentication);
router.get("/course", Controller.showAllCourse);
router.get("/course/:courseId", Controller.detailCourse);
router.post("/mycourse", Controller.addMyCourse);
router.post("/payment", Controller.payment);
router.put("/mycourse/:courseId", Controller.updateCourse);
router.get("/mycourse/:courseId", Controller.showMyCourse);
router.delete("/mycourse/:courseId", Controller.deleteCourse);

module.exports = router;
