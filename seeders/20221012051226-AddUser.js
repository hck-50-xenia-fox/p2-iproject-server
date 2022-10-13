"use strict";
const { hashPass } = require("../helpers/bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const dataUser = require("../data/user.json");
    dataUser.forEach((el) => {
      el.password = hashPass(el.password);
      el.createdAt = el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Users", dataUser, {});
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
    await queryInterface.bulkDelete("Users", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
