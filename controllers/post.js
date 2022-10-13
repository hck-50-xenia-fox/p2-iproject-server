const { Post } = require("../models");
const axios = require("axios");

class Controller {
  static async allPost(req, res, next) {
    try {
      const { data } = await axios.get(
        "https://api.twitter.com/2/tweets/1579968585518436352/quote_tweets",
        {
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAD1ViAEAAAAA4yEnWjPB9kgL0dasn%2BbFXeD7tks%3DWbRolYYVqOyezRBFeryPqixLt29coZAGpPeJeOse4U0nblG5Xo",
          },
        }
      );
      res.status(200).json(data);
      // console.log(response);
    } catch (error) {
      // console.log(error, "<<<<<<<<<");
    }
  }
}
module.exports = Controller;
