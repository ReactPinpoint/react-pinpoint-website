const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../index');
const Project = require('./project');
const User = require('./user');

class UserProject extends Model {};

UserProject.init({
  project_id: {
    type: DataTypes.UUID,
    references: {
      model: Project,
      key: 'project_id'
    }
  },
  user_id: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'user_id'
    }
  },
}, { 
  sequelize, 
  modelName: 'user_project',
  timestamps: false,
 });

User.belongsToMany(Project, { through: UserProject });
Project.belongsToMany(User, { through: UserProject });

module.exports = UserProject;
