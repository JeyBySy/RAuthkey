'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('oauth2_clients', {
      client_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      client_secret: {
        type: Sequelize.STRING
      },
      redirect_uri: {
        type: Sequelize.STRING
      },
      project_code: {
        type: Sequelize.STRING,
        allowNull: false,
        // references: {
        //   model: 'project_masters',
        //   key: 'project_code'
        // }
      },
      response_type: {
        type: Sequelize.STRING
      },
      scope: {
        type: Sequelize.STRING
      },
      grant_types: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('oauth2_clients');
  }
};
