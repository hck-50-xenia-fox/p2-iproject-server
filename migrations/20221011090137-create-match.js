'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wins: {
        type: Sequelize.BOOLEAN
      },
      scoreP1: {
        type: Sequelize.INTEGER
      },
      scoreP2: {
        type: Sequelize.INTEGER
      },
      UserIdP1: {
        allowNull:false,
        type: Sequelize.INTEGER,
      },
      UserIdP2: {
        allowNull:false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Matches');
  }
};