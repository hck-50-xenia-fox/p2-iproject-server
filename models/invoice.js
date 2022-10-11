"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.belongsTo(models.User, { foreignKey: "UserId" });
      Invoice.belongsTo(models.Inventory, { foreignKey: "InventoryId" });
      Invoice.hasMany(models.History, { foreignKey: "InvoiceId" });
    }
  }
  Invoice.init(
    {
      customerName: DataTypes.STRING,
      customerAddress: DataTypes.TEXT,
      InventoryId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      priceToSale: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Invoice",
    }
  );
  return Invoice;
};
