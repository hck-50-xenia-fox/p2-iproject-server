'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Match.init({
    wins: {
      type: DataTypes.BOOLEAN, 
    },
    scoreP1: {
      type: DataTypes.INTEGER,
    }, 
    scoreP2: {
      type: DataTypes.INTEGER,
    },
    UserIdP1: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }, 
    UserIdP2: {
      allowNull: false,
      type:DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    } 
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};