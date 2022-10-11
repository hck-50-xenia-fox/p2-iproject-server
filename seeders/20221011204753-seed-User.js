'use strict';

const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let dataUsers = require('../data/user.json')
   dataUsers.forEach((el) => {
    el.createdAt = new Date()
    el.updatedAt = new Date()
    el.password = hashPassword(el.password)
   })

   await queryInterface.bulkInsert('Users', dataUsers, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
