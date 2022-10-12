"use strict";
const { hashPassword } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.MyCourse, {
        foreignKey: "UserId",
      });
    }
  }
  User.init(
    {
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Username is required",
          },
          notEmpty: {
            msg: "Username is required",
          },
        },
      },
      email: {
        allowNull: false,
        isEmail: true,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Email is required",
          },
          notEmpty: {
            msg: "email is required",
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password is required",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(user) {
          user.password = hashPassword(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
