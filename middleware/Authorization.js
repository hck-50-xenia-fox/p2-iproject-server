const { Course } = require("../models");

const authorization = async (req, res, next) => {
  try {
    let course = await Course.findByPk(req.params.id);
    if (!course) {
      throw { name: " course not found" };
    }
    if (course.UserId == req.user.id) {
      next();
    } else {
      throw { name: "forbidden" };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { authorization };
