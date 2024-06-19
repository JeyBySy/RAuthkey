'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oauth2_client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  oauth2_client.init({
    client_id: DataTypes.STRING,
    client_secret: DataTypes.STRING,
    user_code: DataTypes.STRING,
    client_metadata: DataTypes.JSON,
    client_id_issued_at: DataTypes.INTEGER,
    client_secret_expires_at: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'oauth2_client',
  });
  return oauth2_client;
};