'use strict';
const { passHash } = require('../helpers');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'user@mail.com',
          name: 'user',
          fullName: 'user 1',
          address: 'Jalan sana',
          password: passHash('user123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'user2@mail.com',
          name: 'user2',
          fullName: 'user 2',
          address: 'Jalan sana',
          password: passHash('user123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  },
};
