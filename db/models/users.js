'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255),
    name: DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        // Users.hasMany(models.Items);
        // Users.hasMany(models.Friends, {as: 'friends'});
      }
    }
  });
  return Users;
};
