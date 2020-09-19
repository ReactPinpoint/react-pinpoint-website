const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class Project extends Model {};

Project.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, { sequelize, modelName: 'project' });

module.exports = Project;
