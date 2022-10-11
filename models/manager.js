"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/encrypt");
module.exports = (sequelize, DataTypes) => {
  class Manager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Manager.belongsTo(models.Company);
      Manager.hasMany(models.Employee);
      // define association here
    }
  }
  Manager.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      CompanyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Manager",
    }
  );
  Manager.beforeCreate((el) => {
    el.password = hashPassword(el, password);
  });
  return Manager;
};
