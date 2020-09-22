const User = require('../sequelize/models/user');

const isAuthorized = async (req, res, next) => {
  try {
    const { user_id } = req.session;
    const user = await User.findByPk(user_id);
    if (!user) {
      const err = 'Not Authorized.'
      return next(err);
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = isAuthorized;
