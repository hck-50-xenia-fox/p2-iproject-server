"use strict";
const { hassPassword } = require("../helpers/bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    let user = require("../data/user.json");
    user.forEach((el) => {
      el.password = hassPassword(el.password);
      el.createdAt = new Date();
      el.updateAt = new Date();
    });
    await queryInterface.bulkInsert("Users", user);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", null);

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
