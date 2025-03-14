const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db'); // Sequelize instance from db.js

const Question = sequelize.define('questions', {
  question_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  option_a: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  option_b: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  option_c: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  option_d: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'questions', 
  timestamps: false, 
});

module.exports = Question;
