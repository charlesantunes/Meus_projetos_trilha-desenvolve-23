const database = require('../models');
    //Método buscar todas da Turmas
class TurmaController {

static async pegaTodasAsTurmas(req, res) {
  try {
    const todasAsTurmas = await database.Turmas.findAll()
    return res.status(200).json(todasAsTurmas)
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

    //6.0-Método Consulta apenas uma Turmas/informação pelo id da tabela Turmas
    static async pegaUmaTurma(req,res){
        const { id } = req.params;
        try {
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                } 
            })
            return res.status(200).json(umaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //7.0-Método adicionar uma Pessoa/informação sera recebida pelo body do site
    static async criaTurma(req,res){
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //8.0-Método Update/Atualizar/editar uma Turma é pelo id e body
    static async atualizaTurma(req,res){
        const { id } = req.params;
        const updateTurma = req.body;

        try {
            await database.Turmas.update(updateTurma, { // não precisa armazenar em constante
                where: {
                    id: Number(id)
                } 
            });
            const TurmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: Number(id) 
                } 
            })
            return res.status(200).json(TurmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //9.0-Método Deletar uma Turma/informação pelo id da tabela Turmas
    static async apagaTurma(req,res){
        const { id } = req.params;
        try {
            await database.Turmas.destroy({ 
                where: {
                    id: Number(id)  
                } 
            })
            return res.status(200).json({mensagem : `id ${id} deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;