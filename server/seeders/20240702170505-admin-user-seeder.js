'use strict';
require('dotenv').config();
const { generateUUID4 } = require('../utils/genRandomChar')
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash(process.env.RAUTHKEY_ADMIN_PASSWORD, 10);

    return queryInterface.bulkInsert('user_master_tbls', [{
      user_id: generateUUID4(),
      user_username: process.env.RAUTHKEY_ADMIN_USERNAME,
      user_password: hashedPassword,
      user_email: process.env.RAUTHKEY_ADMIN_EMAIL,
      user_full_name: 'admin',
      project_associate: 'RTHKY',
      is_superuser: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_master_tbls', null, {});
  }
};
