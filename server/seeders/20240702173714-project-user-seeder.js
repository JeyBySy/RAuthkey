'use strict';

const { generateUUID4 } = require('../utils/genRandomChar')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('project_masters', [{
      project_name: "RauthKey",
      project_code: generateUUID4(),
      project_associate: "RTHKY",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('project_masters', null, {});
  }
};
