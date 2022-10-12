let router = require("express").Router();
let userRouter = require("../routes/user");
let routerYoutube = require("../routes/youtube");

router.use("/users", userRouter);
router.use("/youtube", routerYoutube);

module.exports = router;
