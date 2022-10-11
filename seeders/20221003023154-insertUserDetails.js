"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/driver.json");
    data.forEach((e) => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("UserDetails", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserDetails", null, {});
  },
};
