module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.UserAnswer, { foreignKey: "user_id" });
  };

  return User;
};
