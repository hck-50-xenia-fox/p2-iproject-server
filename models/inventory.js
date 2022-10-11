"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.belongsTo(models.User, { foreignKey: "UserId" });
      Inventory.hasMany(models.Invoice, { foreignKey: "InventoryId" });
      Inventory.hasMany(models.History, { foreignKey: "InventoryId" });
    }
  }
  Inventory.init(
    {
      productName: DataTypes.STRING,
      supplierName: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      pricePerItem: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      rev: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Inventory",
    }
  );
  return Inventory;
};
