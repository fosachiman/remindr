'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Items', 'userId', {
        type: Sequelize.INTEGER,
    })
  }
};

