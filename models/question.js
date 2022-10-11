'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init({
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Question description is required'
        },
        notEmpty: {
          msg : 'Question description is required'
        }
      }
    },
    choice1: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Choices is required'
        },
        notEmpty: {
          msg : 'Choices is required'
        }
      }
    },
    choice2: {
      allowNull: false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Choices is required'
        },
        notEmpty: {
          msg : 'Choices is required'
        }
      }
      
    },
    choice3: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Choices is required'
        },
        notEmpty: {
          msg : 'Choices is required'
        }
      }
    },
    choice4:{
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Choices is required'
        },
        notEmpty: {
          msg : 'Choices is required'
        }
      }
    },
    answer: {
      allowNull: false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Answer for the question is required'
        },
        notEmpty: {
          msg : 'Answer for the question is required'
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};