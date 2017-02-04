'use strict';
module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define('Categories', {
    user_id: DataTypes.STRING(255),
    category: DataTypes.STRING(255),
    email: DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Categories;
};
