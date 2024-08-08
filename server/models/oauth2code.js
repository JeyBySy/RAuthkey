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
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    client_id: {
      type: DataTypes.STRING
    },
    redirect_uri: {
      type: DataTypes.STRING
    },
    response_type: {
      type: DataTypes.STRING
    },
    scope: {
      type: DataTypes.STRING
    },
    used: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'oauth2_codes',
  });
  return oauth2_codes;
};