'use strict';
const { Model } = require('sequelize');
const { passHash } = require('../helpers/helpers');
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
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Name is required',
          },
          notNull: {
            msg: 'Name is required',
          },
        },
      },

      role: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Role is required',
          },
          notNull: {
            msg: 'Role is required',
          },
        },
      },

      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Full name is required',
          },
          notNull: {
            msg: 'Full name is required',
          },
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: {
          msg: 'Email must be unique',
        },
        validate: {
          notEmpty: {
            msg: 'Email is required',
          },
          isEmail: {
            msg: 'Invalid email format',
          },
          notNull: {
            msg: 'Email is required',
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Password is required',
          },
          notNull: {
            msg: 'Password is required',
          },
        },
      },

      status: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Status is required',
          },
          notNull: {
            msg: 'Status is required',
          },
        },
      },

      address: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Address is required',
          },
          notNull: {
            msg: 'Address is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.addHook('beforeCreate', (user, options) => {
    user.password = passHash(user.password);
  });

  return User;
};
