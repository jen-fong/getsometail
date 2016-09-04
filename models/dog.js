'use strict';
module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define('Dog', {
    breed: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Dog.belongsTo(models.Girl);
      }
    }
  });
  return Dog;
};