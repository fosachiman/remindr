'use strict';
module.exports = function(sequelize, DataTypes) {
  var Friends = sequelize.define('Friends', {
    user_1: DataTypes.BIGINT,
    user_2: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        Friends.belongsToMany(models.Users, {through: 'user_1', foreignKey: 'user_1'});
      }
    }
  });
  return Friends;
};
