module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      question_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      correct_answer: {
        type: DataTypes.ENUM("A", "B", "C", "D"),
        allowNull: false,
      },
    },
    {
      tableName: "questions",
      timestamps: false,
    }
  );

  Question.associate = (models) => {
    Question.hasMany(models.UserAnswer, { foreignKey: "question_id" });
  };

  return Question;
};
