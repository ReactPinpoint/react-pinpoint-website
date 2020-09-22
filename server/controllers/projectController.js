const Project = require('../sequelize/models/project');

const projectController = {};

projectController.getProject = async (req, res, next) => {
  try {
    //TODO write logic to fetch project from DB
    const project = await Project.findAll();
    res.locals.project = project;
    next();
  } catch (err) {
    next(err);
  }
}

projectController.addProject = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const project = await Project.create({ name, description });
    res.locals.createdProject = project;
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

// deletes all projects for now
projectController.deleteProject = async (req, res, next) => {
  try {
    const result = Project.destroy({ where: {} });
    console.log(result)
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = projectController;
