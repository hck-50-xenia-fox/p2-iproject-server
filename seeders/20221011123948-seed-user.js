'use strict';
const { passHash } = require('../helpers/helpers');

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
          role: 'User',
          status: 'Free',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'user2@mail.com',
          name: 'user2',
          role: 'User',
          fullName: 'user 2',
          status: 'Free',
          address: 'Jalan sana',
          password: passHash('user123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'admin@mail.com',
          name: 'admin',
          role: 'Admin',
          status: 'Free',
          fullName: 'admin 1',
          address: 'Jalan sana',
          password: passHash('admin123'),
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
