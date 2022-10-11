"use strict";

const { hashSync } = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/users.json");
    data.forEach((e) => {
      e.password = hashSync(e.password);
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
