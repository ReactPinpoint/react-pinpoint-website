const User = require('../sequelize/models/user');

const userController = {};

userController.getUser = async (req, res, next) => {
  try {
    //TODO write logic to fetch user from DB
    next();
  } catch (err) {
    next(err);
  }
}

userController.addUser = async (req, res, next) => {
  try {
    //TODO write logic to add user to DB
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = userController;
