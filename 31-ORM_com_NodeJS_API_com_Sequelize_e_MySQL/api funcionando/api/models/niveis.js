'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  Niveis.associate = function(models) {//11
    // associations can be defined here. um para vários
    Niveis.hasMany(models.Turmas,{ foreignKey: 'nivel_id' });

  };
  return Niveis;
};