"use strict";

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question", 
    {
      question_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,  
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
      },
      correct_answer: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: "questions",
      timestamps: false, 
    }
  );

  return Question;
};
