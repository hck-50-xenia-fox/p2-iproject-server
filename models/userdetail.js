"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    static associate(models) {
      UserDetail.hasMany(models.Payment);
      UserDetail.hasOne(models.Vehicle);
      UserDetail.belongsTo(models.User);
    }
  }
  UserDetail.init(
    {
      UserId: DataTypes.INTEGER,
      balance: DataTypes.INTEGER,
      pickUpTime: DataTypes.DATE,
      pickUpFrom: DataTypes.STRING,
      drop: DataTypes.STRING,
      rideType: DataTypes.STRING,
      rideRate: DataTypes.STRING,
      rideStatus: DataTypes.BOOLEAN,
      lisence: DataTypes.STRING,
      earning: DataTypes.INTEGER,
      totalRides: DataTypes.INTEGER,
      rideDetails: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  return UserDetail;
};
