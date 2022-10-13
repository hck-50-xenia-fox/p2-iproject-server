const { Like, Post } = require("../models");

class Controller {
  static async likePost(req, res, next) {
    console.log("=============");
    const { postId } = req.params;
    const { id } = req.user;
    console.log(postId, id, "=========");
    try {
      const post = await Post.findOne({
        where: { id: +postId },
      });
      if (!post) {
        throw { name: "Data not found" };
      }
      const like = await Like.create({
        PostId: +postId,
        UserId: id,
      });
      res.status(201).json({
        id: like.id,
        PostId: like.PostId,
        UserId: like.UserId,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
