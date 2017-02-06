'use strict';
module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define('Items', {
    user_id: DataTypes.BIGINT,
    name: DataTypes.STRING(255),
    desc: DataTypes.TEXT,
    category: DataTypes.STRING(255),
    suggestion: DataTypes.BOOLEAN,
    userId: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
      //   Items.belongsTo(models.Users, {foreignKey: 'userId'})
      }
    }
  });
  return Items;
};
