const express = require("express");
const router = express.Router();
const Like = require("../controllers/like");
const authentication = require("../middleware/authentication");
const authorizationLike = require("../middleware/authorization-like");

router.post("/:postId", authentication, authorizationLike, Like.likePost);

module.exports = router;
