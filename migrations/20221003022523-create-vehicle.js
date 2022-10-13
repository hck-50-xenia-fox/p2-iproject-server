"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Vehicles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserDetailId: {
        type: Sequelize.INTEGER,
        references: {
          model: "UserDetails",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      policeNum: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rate: {
        type: Sequelize.INTEGER,
      },
      basePrice: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Vehicles");
  },
};
