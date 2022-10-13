'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull:false,
        type: Sequelize.STRING
      },
      choice1: {
        allowNull:false,
        type: Sequelize.STRING
      },
      choice2: {
        allowNull:false,
        type: Sequelize.STRING
      },
      choice3: {
        allowNull:false,
        type: Sequelize.STRING
      },
      choice4: {
        allowNull:false,
        type: Sequelize.STRING
      },
      answer: {
        allowNull:false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};