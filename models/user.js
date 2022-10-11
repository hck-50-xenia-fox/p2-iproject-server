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
    username: {
      allowNull:false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg : 'Username is required'
        },
        notEmpty : {
          msg : 'Username is required'
        }
      }
    },
    email: {
      allowNull: false,
      unique : {
        msg : 'Email is already used'
      },
      type: DataTypes.STRING,
      validate: {
        notNull : {
          msg : 'Email is required'
        },
        notEmpty : {
          msg : 'Email is required'
        }
      }
    },
    password: {
      allowNull : false,
      type: DataTypes.STRING,
      validate : {
        notNull : {
          msg : 'Password is required'
        },
        notEmpty : {
          msg: 'Password is required'
        }
      }
    },
    exp: {
      type: DataTypes.INTEGER,
      defaultValue: [0]
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue : 'https://png.pngitem.com/pimgs/s/46-468761_pikachu-png-transparent-image-pikachu-png-png-download.png'
    } 
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance, options) => {
    instance.password = hashPassword(instance.password)
  })

  return User;
};