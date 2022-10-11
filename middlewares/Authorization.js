const { User } = require("../models");

const Authorization = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { movieId } = req.params;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = Authorization;
