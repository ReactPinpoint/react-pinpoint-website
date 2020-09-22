const User = require('../sequelize/models/user');

const userController = {};

userController.getUser = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ 
      where: {
        username
      }
    });
    res.locals.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

userController.addUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password })
    //TODO write logic to hide user password before response
    res.locals.createdUser = user;
    next();
  } catch (err) {
    next(err);
  }
}

userController.updateUser = async (req, res, next) => {
  try {
    //TODO write logic to update user in database
    next();
  } catch (err) {
    next(err);
  }
}

userController.deleteUser = async (req, res, next) => {
  // this just deletes all users for now
  try {
    User.destroy({ where: {} });
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = userController;
