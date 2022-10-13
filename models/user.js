"use strict";
const { Model } = require("sequelize");
const { changeToHash } = require("../helpers/bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Inventory, { foreignKey: "UserId" });
      User.hasMany(models.Invoice, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: {
            msg: "please fill the email",
          },
          notEmpty: {
            msg: "please fill the email",
          },
          isEmail: {
            msg: "please fill with email format",
          },
        },
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please fill the CompanyName",
          },
          notNull: {
            msg: "Please fill the CompanyName",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please fill the Password",
          },
          notNull: {
            msg: "Please fill the Password",
          },
        },
      },
      address : {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please fill the Address",
          },
          notNull: {
            msg: "Please fill the Address",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((instance, option) => {
    instance.password = changeToHash(instance.password);
  });
  return User;
};
