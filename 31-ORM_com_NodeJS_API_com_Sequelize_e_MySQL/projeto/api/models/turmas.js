'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {//12
    // associations can be defined here
    Turmas.hasMany(models.Matriculas,{ foreignKey: 'turma_id' });
    
    // associação ao contrario de quem: ex. se turma criou uma foreignKey em matricula, agora matricula vai fazer uma associação com turma, usamos o método belongsTo().
    Turmas.belongsTo(models.Pessoas,{ foreignKey: 'docente_id' });
    Turmas.belongsTo(models.Niveis,{ foreignKey: 'nivel_id' });

  };
  return Turmas;
};