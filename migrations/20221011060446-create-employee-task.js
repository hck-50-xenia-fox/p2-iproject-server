"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EmployeeTasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      EmployeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Employees",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      TaskId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tasks",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      status: {
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
    await queryInterface.dropTable("EmployeeTasks");
  },
};
