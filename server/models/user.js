'use strict';
const {
  Model
} = require('sequelize');
const { createHashPassword } = require('../helpers/helpers');
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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {
          msg : "Username required"
        },
        notEmpty : {
          msg : "Username required"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true,
      validate: {
        notNull : {
          msg : "Email required"
        },
        notEmpty : {
          msg : "Email required"
        },
        isEmail : {
          msg : "Email must be email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args : [6, 15],
          msg : "Password range is 6-15 character"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance) => {
    instance.password = createHashPassword(instance.password)
  })
  return User;
};