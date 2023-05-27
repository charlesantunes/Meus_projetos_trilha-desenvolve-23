'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function(models) {//13.0 - codigo feito em PessoaController
    // associations can be defined here, aqui não teve chave estrangeira

    // associação ao contrario de quem: ex. se turma criou uma foreignKey em matricula, agora matricula vai fazer uma associação com turma, usamos o método belongsTo().
    Matriculas.belongsTo(models.Pessoas,{ foreignKey: 'estudante_id' })
    Matriculas.belongsTo(models.Turmas,{ foreignKey: 'turma_id' })
  };
  return Matriculas;
};