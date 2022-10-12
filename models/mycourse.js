"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MyCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyCourse.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      MyCourse.belongsTo(models.Course, {
        foreignKey: "CourseId",
      });
    }
  }
  MyCourse.init(
    {
      CourseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "CourseId is Required",
          },
          notEmpty: {
            msg: "CourseId is Required",
          },
        },
      },
      UserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "UserId is Required",
          },
          notEmpty: {
            msg: "UserId is Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "MyCourse",
    }
  );
  return MyCourse;
};
