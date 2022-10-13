"use strict";
const { Model } = require("sequelize");
const { hashThePassword } = require("../helpers/encryption");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.UserDetail);
    }
  }
  User.init(
    {
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "usename can't null",
          },
          notEmpty: { msg: "username is required" },
        },
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "usename can't null",
          },
          notEmpty: { msg: "username is required" },
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "email can't null",
          },
          notEmpty: { msg: "email is required" },
          isEmail: {
            msg: "please check your format email",
          },
        },
        unique: {
          msg: "email must be unique",
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "password can't null",
          },
          notEmpty: { msg: "password is required" },
          len: {
            args: 5,
            msg: "minimum password is 5",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    user.password = hashThePassword(user.password);
    if (!user.role) user.role = "Customer";
  });
  return User;
};
