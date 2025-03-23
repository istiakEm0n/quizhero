'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('questions', 'question_text', {
      type: Sequelize.TEXT, // Change to TEXT
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('questions', 'question_text', {
      type: Sequelize.STRING, // Revert to STRING if needed
      allowNull: false,
    });
  }
};

