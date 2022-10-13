"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Invoices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      customerAddress: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      customerEmail: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      customerPhoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      InventoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Inventories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      priceToSale: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      rev: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Invoices");
  },
};
