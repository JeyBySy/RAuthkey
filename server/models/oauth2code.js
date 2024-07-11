'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oauth2_codes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  oauth2_codes.init({
    code: DataTypes.STRING,
    client_id: DataTypes.STRING,
    redirect_uri: DataTypes.STRING,
    response_type: DataTypes.STRING,
    scope: DataTypes.STRING,
    user_code: DataTypes.STRING,
    used: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'oauth2_codes',
  });
  return oauth2_codes;
};