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
    client_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    client_secret: {
      type: DataTypes.STRING
    },
    redirect_uri: {
      type: DataTypes.STRING
    },
    project_code: {
      type: DataTypes.STRING
    },
    response_type: {
      type: DataTypes.STRING
    },
    grant_types: {
      type: DataTypes.STRING
    },
    scope: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'oauth2_client',
  });
  return oauth2_client;
};