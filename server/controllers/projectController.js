const Project = require('../sequelize/models/project');

const projectController = {};

projectController.getProject = async (req, res, next) => {
  try {
    //TODO write logic to fetch project from DB
    next();
  } catch (err) {
    next(err);
  }
}

projectController.addProject = async (req, res, next) => {
  try {
    //TODO write logic to add project to DB
    next();
  } catch (err) {
    next(err);
  }
}

projectController.updateProject = async (req, res, next) => {
  try {
    //TODO write logic to update project in DB
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = projectController;
