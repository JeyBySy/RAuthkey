'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project_masters', {
      project_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      project_code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4
      },
      project_associate: {
        type: Sequelize.STRING,
        unique: true
      },
      project_auth_key: {
        type: Sequelize.STRING,
        unique: true
      },
      project_auth_secret: {
        type: Sequelize.STRING,
        unique: true
      },
      project_owner_user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'user_master_tbls',
          key: 'user_id'
        }
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
    await queryInterface.dropTable('project_masters');
  }
};