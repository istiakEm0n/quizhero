const { DataTypes } = require('sequelize');
const sequelize = require('../db/db'); // Import the Sequelize instance

const User = sequelize.define('users', {
  user_id: {
    type: DataTypes.UUID, 
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4, 
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', 
  timestamps: false, 
});

module.exports = User; 
