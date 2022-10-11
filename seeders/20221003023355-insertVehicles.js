"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/vehicle.json");
    data.forEach((e) => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Vehicles", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vehicles", null, {});
  },
};
