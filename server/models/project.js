const { Sequelize, Model, DataTypes } = require('sequelize');

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
