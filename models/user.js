'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcyrpt');
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
      unique: {
        msg: `Username has been taken`
      },
      validate: {
        notEmpty: {
          msg: `Username is Required`
        },
        notNull: {
          msg: `Username is Required`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: `Email has been taken`
      },
      validate: {
        notEmpty: {
          msg: `Email is Required`
        },
        notNull: {
          msg: `Email is Required`
        },
        isEmail: {
          msg: `Email is Invalid`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Password is Required`
        },
        notNull: {
          msg: `Password is Required`
        },
        isAlphanumeric: {
          msg: `Password must alphanumeric`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((model,option) =>{
    model.password = hashPass(model.password)
  })

  return User;
};