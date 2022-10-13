'use strict';

const bcrypt = require('../helpers/bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [
      {
        email: "test1@gmail.com",
        password: "12345"
      }
    ]
    data.forEach(x => {
      x.createdAt = new Date()
      x.updatedAt = new Date()
      x.password = bcrypt.hashPassword(x.password)
    })
    await queryInterface.bulkInsert('Users', data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null)
  }
};
