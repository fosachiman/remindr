'use strict';
module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define('Items', {
    user_id: DataTypes.BIGINT,
    name: DataTypes.STRING(255),
    desc: DataTypes.TEXT,
    category: DataTypes.STRING(255),
    suggestion: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Items;
};