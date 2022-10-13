"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      Vehicle.belongsTo(models.UserDetail);
    }
  }
  Vehicle.init(
    {
      UserDetailId: DataTypes.INTEGER,
      model: DataTypes.STRING,
      policeNum: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      basePrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Vehicle",
    }
  );
  return Vehicle;
};
