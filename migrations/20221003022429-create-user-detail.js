"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      balance: {
        type: Sequelize.INTEGER,
      },
      pickUpTime: {
        type: Sequelize.DATE,
      },
      birthDate: {
        type: Sequelize.DATE,
      },
      pickUpFrom: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      drop: {
        type: Sequelize.STRING,
      },
      rideType: {
        type: Sequelize.STRING,
      },
      rideRate: {
        type: Sequelize.STRING,
      },
      rideStatus: {
        type: Sequelize.BOOLEAN,
      },
      lisence: {
        type: Sequelize.STRING,
      },
      earning: {
        type: Sequelize.INTEGER,
      },
      totalRides: {
        type: Sequelize.INTEGER,
      },
      rideDetails: {
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
    await queryInterface.dropTable("UserDetails");
  },
};
