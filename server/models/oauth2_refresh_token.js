'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oauth2_refresh_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  oauth2_refresh_token.init({
    refresh_token: DataTypes.STRING,
    client_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    expires_in: DataTypes.INTEGER,
    revoked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'oauth2_refresh_token',
  });
  return oauth2_refresh_token;
};