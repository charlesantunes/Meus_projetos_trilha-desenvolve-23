import livros from "../models/Livros.js";

class LivroController {
    
    static listarLivros = (req,res) =>{
        livros.find()
        .populate('autor')  //consulta Autor.js, mostra as inf de autor da tabela autores.
        .exec((err,livros) =>{
        res.status(200).json(livros)
        })
    }

    static listarLivroPorId = (req,res) =>{
        const id = req.params.id;

        livros.findById(id)
        .populate('autor','nome') // adicionando o campo nome para especificar o campo único da pesquisa.
        .exec((err,livros)=>{
            if (err) {
                res.status(400).send({message:`${err.message} -Id do livro não encontrado}`}) //400 erro do usuário
            } else {
                res.status(200).send(livros);
            }
        }) 
    }

    static cadastrarLivros = (req,res) =>{
        const livro = new livros(req.body); //criando um novo objeto p/ armazenar os dados do corpo

        livro.save((err)=>{

            if (err) {
                res.status(500).send({message:`${err.message} - Falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivros = (req,res) =>{
        const id = req.params.id;

        livros.findByIdAndUpdate(id,{$set: req.body},(err)=>{  //usar id para consulta e $set para adicionar
            if (!err) {
                res.status(200).send({message: "O livro foi atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })  
    }

    static excluirLivro = (req,res)=>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) =>{
            if (!err) {
                res.status(200).send({message: `Livro removido com sucesso`})
            } else {
                res.status(500).send({message:err.message})
            }
        })
    }

    static listarLivroPorEditora = (req,res)=>{
       const editora = req.query.editora; //busca na página a palavra editora e passa por parametro na url.

       //find() = aqui vai ser feito um filtro na página pelo campo editora e atribuir a variavel editora, depois comparar com o valor do campo editora do banco de dados.
       livros.find({'editora':editora},{},(err,livros)=>{
        res.status(200).send(livros);
        //aqui pode incluir o if else do err
       })       
    }
};

export default LivroController;
