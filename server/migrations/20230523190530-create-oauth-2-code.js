'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('oauth2_codes', {
      code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      client_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      redirect_uri: {
        type: Sequelize.STRING
      },
      expires_at: {
        type: Sequelize.STRING
      },
      used: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      scope: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('oauth2_codes');
  }
};