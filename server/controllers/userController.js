const User = require('../sequelize/models/user');
const UserProject = require('../sequelize/models/user-projects');

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

userController.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const results = await User.findAll({ where: { username }});
    if (results.length) {
      res.locals.createdUser = { err: 'User exists'};
      return next();
    }
    const user = await User.create({ username, password })
    res.locals.createdUser = user;
    // TODO start a session
    next();
  } catch (err) {
    next(err);
  }
}

userController.updateUser = async (req, res, next) => {
  try {
    // TODO write logic to update user in database
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

userController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.locals.loggedIn = { loggedIn: false };
      return next();
    }
    const user = await User.findOne({
      where: {
        username,
      }
    })
    if (!user) {
      res.locals.loggedIn = { loggedIn: false };
      return next();
    }
    const validated = await user.validatePassword(password, user);
    res.locals.loggedIn = { loggedIn: validated };
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = userController;
