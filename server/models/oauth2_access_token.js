'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oauth2_access_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  oauth2_access_token.init({
    access_token: DataTypes.STRING,
    client_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    expires_in: DataTypes.INTEGER,
    scope: DataTypes.STRING,
    revoked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'oauth2_access_token',
  });
  return oauth2_access_token;
};