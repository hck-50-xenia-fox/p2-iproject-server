"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.MyCourse, {
        foreignKey: "CourseId",
      });
    }
  }
  Course.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      program: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Program is required",
          },
          notEmpty: {
            msg: "Program is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
