const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../index');

class User extends Model {};

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

User.beforeCreate(async (user) => {
  try {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    return;
  }
  catch (err) {
    return err;
  }
})

module.exports = User;
