const Controller = require("../Controllers/User");

let userRouter = require("express").Router();

userRouter.post("/register", Controller.register);
userRouter.post("/login", Controller.login);
userRouter.get("/getHistory", Controller.getHistory);

module.exports = userRouter;
