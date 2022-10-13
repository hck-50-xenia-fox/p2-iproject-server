const express = require("express");
const router = express.Router();
const users = require("./user");
const posts = require("./post");
const likes = require("./like");

router.use("/user", users);
router.use("/post", posts);
router.use("/like", likes);

module.exports = router;
