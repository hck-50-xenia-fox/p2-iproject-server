"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/encrypt");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.Manager);
      Employee.belongsTo(models.Company);
      // define association here
    }
  }
  Employee.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "First name is required",
          },
          notNull: {
            msg: "First name is required",
          },
        },
      },
      lastName: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "role is required",
          },
          notNull: {
            msg: "role is required",
          },
        },
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Experience is required",
          },
          notEmpty: {
            msg: "Experience is required",
          },
        },
      },
      email: {
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
      password: {
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
      ManagerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Manager id required",
          },
          notEmpty: {
            msg: "Manager id required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  Employee.beforeCreate((el) => {
    el.password = hashPassword(el.password);
  });
  return Employee;
};
