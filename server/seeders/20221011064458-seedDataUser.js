"use strict";

const { createHashPassword } = require("../helpers/helpers");

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [
      {
        username: "wandi",
        email: "wandi@mail.com",
        password: createHashPassword("123456"),
        role: "reguler",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert(
      "Users",
      data,

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
