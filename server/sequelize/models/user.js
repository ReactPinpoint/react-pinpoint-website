const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../index');

class User extends Model {};

const hashPassword = async (user) => {
  try {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    return;
  } catch (err) {
    return err;
  }
};

User.init({
  user_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull:false,
    primaryKey: true,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { 
  sequelize, 
  modelName: 'user', 
  timestamps: false,
});

User.beforeCreate(hashPassword);

User.prototype.validatePassword = async (password, user) => {
  try {
    return await bcrypt.compare(password, user.password);
  } catch (err) {
    return err;
  }
};

module.exports = User;
