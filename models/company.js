"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/encrypt");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.Manager);
      Company.hasMany(models.Employee);
      // define association here
    }
  }
  Company.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Company name is required",
          },
          notNull: {
            msg: "Company name is required",
          },
        },
      },
      companyEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Email is required",
          },
          notNull: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Invalid email format",
          },
        },
        unique: {
          msg: "Email must be unique",
        },
      },
      companyPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password is required",
          },
          notNull: {
            msg: "Password is required",
          },
          len: {
            args: 5,
            msg: "Password minimum 5 character",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  Company.beforeCreate((el) => {
    el.companyPassword = hashPassword(el.companyPassword);
  });
  return Company;
};
