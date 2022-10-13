"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/item.json");
    data.forEach((e) => {
      delete e.id;
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Items", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
