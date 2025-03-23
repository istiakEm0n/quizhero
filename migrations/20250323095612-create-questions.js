"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("questions", {
      question_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"), // Use 
        allowNull: false,
        primaryKey: true,
      },
      question_text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("questions");
  },
};
