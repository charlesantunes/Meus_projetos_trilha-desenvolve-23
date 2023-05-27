const database = require('../models');

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
    try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
    } catch (error) {
        return res.status(500).json(error.message);
    }
    }

    //6.0-Método Consulta apenas uma Nivel/informação pelo id da tabela Niveis
    static async pegaUmNivel(req,res){
        const { id } = req.params;
        try {
            const umNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                } 
            })
            return res.status(200).json(umNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //7.0-Método adicionar um Nivel/informação sera recebida pelo body do site
    static async criaNivel(req,res){
        const novoNivel = req.body
        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //8.0-Método Update/Atualizar/editar um Nivel é pelo id e body
    static async atualizaNivel(req,res){
        const { id } = req.params;
        const updateNivel = req.body;

        try {
            await database.Niveis.update(updateNivel, {
                where: {
                    id: Number(id)
                } 
            });
            const NivelAtualizado = await database.Niveis.findOne({
                where: {
                    id: Number(id) 
                } 
            })
            return res.status(200).json(NivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //9.0-Método Deletar um Nivel/informação pelo id da tabela Niveis
    static async apagaNivel(req,res){
        const { id } = req.params;
        try {
            await database.Niveis.destroy({ 
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

module.exports = NivelController;