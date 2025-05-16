module.exports = (sequelize, DataTypes) => {
    const UserAnswer = sequelize.define(
      "UserAnswer",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        question_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        selected_answer: {
          type: DataTypes.ENUM("A", "B", "C", "D"),
          allowNull: false,
        },
      },
      {
        tableName: "user_answers",
        timestamps: true,
      }
    );
  
    UserAnswer.associate = (models) => {
      UserAnswer.belongsTo(models.User, { foreignKey: "user_id" });
      UserAnswer.belongsTo(models.Question, { foreignKey: "question_id" });
    };
  
    return UserAnswer;
  };
  