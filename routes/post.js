const express = require("express");
const router = express.Router();
const Post = require("../controllers/post");
const authentication = require("../middleware/authentication");
// router.use(authentication);

router.get("/", Post.allPost);

module.exports = router;
