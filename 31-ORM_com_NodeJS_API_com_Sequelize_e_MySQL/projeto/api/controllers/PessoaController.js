const database = require('../models');

//findAll() é encontrar tudo, ela é um func do sequelize e faz o papel de pesquisar tudo do banco de dados, ou seja, select * from Pessoas;
class PessoaController {//01 - recebe o bd

    //4.0-consulta todas as informações da tabela Pessoas
    static async pegaTodasAsPessoas(req,res){
        try {            
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas); //retornando o estatos code de ok e convertendo para json que é o tipo que o js entende.
        } catch (error) {
            return res.status(500).json(error.message); //status 500 é erro de servidor e error.message é o objeto do erro.
        }
    }

    //6.0-Método Consulta apenas uma Pessoa/informação pelo id da tabela Pessoas
    static async pegaUmaPessoa(req,res){
        const { id } = req.params;   //vai ser implementado no 6.1 = diz que quando tiver um paramento com id no endereço de pesquisa ele pega/armazena
        try {
            const umaPessoa = await database.Pessoas.findOne({ //findOne() = pesquisa um registro no bd
                //o que vai retornar, a condição, no caso é o id passado, poderia ter nome, role...
                where: {
                    id: Number(id)  //id: é a propriedade;   Number(id) é a conversão do valor id que vamos passar para a consulta. (const { id } = req.params)
                } 
            })
            return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //7.0-Método adicionar uma Pessoa/informação sera recebida pelo body do site
    static async criaPessoa(req,res){
        const novaPessoa = req.body //armazenar todos os dados do body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa) //cria/add no bd a nova informação.
            return res.status(200).json(novaPessoaCriada) // apenas um retorno http de que foi criado.
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //8.0-Método Update/Atualizar/editar uma Pessoa é pelo id e body
    static async atualizaPessoa(req,res){
        const { id } = req.params;
        const updatePessoa = req.body;

        try {
            await database.Pessoas.update(updatePessoa, { // não precisa armazenar em constante
                where: {
                    id: Number(id)
                } 
            });
            //o retorno será todos os dados adicionado, usaremos o findOne() para retorna apenas essa pessoa.
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id) 
                } 
            })
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //9.0-Método Deletar uma Pessoa/informação pelo id da tabela Pessoas
    static async apagaPessoa(req,res){
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({ 
                where: {
                    id: Number(id)  
                } 
            })
            return res.status(200).json({mensagem : `id ${id} deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
//====================================Matricula======================================
    //Matricula 13.1 - depois vai pra rotas de pesssoas e add a rota de matricula lá.
    
    //Cunsultar uma matricula
    //http://localhost:3000/pessoas/1/matricula/5
    //http://localhost:3000/pessoas/:estudanteId/matricula/:matriculaId
    static async pegaUmaMatricula(req,res){
        const { estudanteId, matriculaId } = req.params;
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                } 
            })
            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    //Adicionar/Criar uma matricula
    static async criaMatricula(req,res){
        const {estudanteId} = req.params;
        const novaMatricula = {...req.body, estudante_id: Number(estudanteId) }//espalhar ou sprad
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula) //cria/add no bd a nova informação.
            return res.status(200).json(novaMatriculaCriada) // apenas um retorno http de que foi criado.
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //Atualiza matricula
    static async atualizaMatricula(req,res){
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body

        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                } 
            });
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId) 
                } 
            })
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //Delete matricula.
    static async apagaMatricula(req,res){
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({ 
                where: {
                    id: Number(matriculaId)  
                } 
            })
            return res.status(200).json({mensagem : `id ${matriculaId} deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
}

module.exports = PessoaController;