'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      
      user_id: {
        type: Sequelize.UUID,
        primaryKey:true,
        defaultValue:Sequelize.UUIDV5
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
