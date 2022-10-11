"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EmployeeTask.belongsTo(models.Employee);
      EmployeeTask.belongsTo(models.Task);
      // define association here
    }
  }
  EmployeeTask.init(
    {
      EmployeeId: DataTypes.INTEGER,
      TaskId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EmployeeTask",
    }
  );
  EmployeeTask.beforeCreate((el) => {
    el.status = "Uncomplete";
  });
  return EmployeeTask;
};
