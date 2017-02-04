'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Categories', 'email', {
        type: Sequelize.STRING(255),
    })
  }
};
