const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../index');

class Project extends Model {};

Project.init({
  project_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull:false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, { 
  sequelize, 
  modelName: 'project',
  timestamps: false,
 });

module.exports = Project;
