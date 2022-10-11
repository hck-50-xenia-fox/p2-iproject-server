'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      History.belongsTo(models.User)
      History.belongsTo(models.Invoice)
      History.belongsTo(models.Inventory)
    }
  }
  History.init({
    expense: DataTypes.INTEGER,
    revenue: DataTypes.INTEGER,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    UserId : DataTypes.INTEGER,
    InventoryId : DataTypes.INTEGER,
    InvoiceId : DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};