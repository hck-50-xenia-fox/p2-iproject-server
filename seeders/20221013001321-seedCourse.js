'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let data = require("../data/course.json");
    // console.log(data);
    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Courses", data);
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
