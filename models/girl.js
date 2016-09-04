'use strict';
module.exports = function(sequelize, DataTypes) {
  var Girl = sequelize.define('Girl', {
    type: DataTypes.STRING,
    href: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Girl.hasMany(models.Dog, { as: 'Dogs' });
      }
    }
  });
  return Girl;
};