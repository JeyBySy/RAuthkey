'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project_master.init({
    project_name: {
      type: DataTypes.STRING,
      unique: true
    },
    project_code: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    project_associate: {
      type: DataTypes.STRING,
      unique: true
    },
    project_auth_key: {
      type: DataTypes.STRING,
      unique: true
    },
    project_auth_secret: {
      type: DataTypes.STRING,
      unique: true
    },
    project_owner_user_id: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'project_master',
  });
  return project_master;
};