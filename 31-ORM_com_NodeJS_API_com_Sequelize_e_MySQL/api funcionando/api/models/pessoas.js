'use strict';
module.exports = (sequelize, DataTypes) => {//aqui o sequelize converte as linguagem de bd para js
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
    // associations can be defined here
    Pessoas.hasMany(models.Turmas,{ foreignKey: 'docente_id' });
    Pessoas.hasMany(models.Matriculas,{ foreignKey: 'estudante_id' });
  };
  return Pessoas;
};