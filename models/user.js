'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  User.init({
    username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Input email with a correct format"
          },
          notEmpty:{
            msg: "Email must be filled"
          }
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Password must be filled',
          },
          len: {
            args: 5,
            msg: 'Password minimum 5',
          },
        },
      },
      role: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options) => {
    instance.password = hashPassword(instance.password);
  });
  return User;
};