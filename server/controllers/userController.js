const User = require('../sequelize/models/user');

const userController = {};

userController.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { user_id: res.locals.user_id } });
    res.locals.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

userController.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ where: {} });
    res.locals.users = users;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = userController;
