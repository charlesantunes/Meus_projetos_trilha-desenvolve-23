import autores from "../models/Autor.js";

class AutorController {
    
    static listarAutores = (req,res) =>{
        autores.find((err,autores) =>{
            res.status(200).json(autores)
        })
    }
    
    static listarAutorPorId = (req,res) =>{
        const id = req.params.id;

        autores.findById(id,(err,autores)=>{
            if (err) {
                res.status(400).send({message:`${err.message} -Id do autor não encontrado}`}) //400 erro do usuário
            } else {
                res.status(200).send(autores);
            }
        }) 
    }
    
    static cadastrarAutor = (req,res) =>{
        let autor = new autores(req.body); //criando um novo objeto p/ armazenar os dados do corpo
        
        autor.save((err)=>{
            
            if (err) {
                res.status(500).send({message:`${err.message} - Falha ao cadastrar autor.`})
            } else {
                res.status(201).send(autor.toJSON());
            }
        })
    }
    
    static atualizarAutores = (req,res) =>{
        const id = req.params.id;
        
        autores.findByIdAndUpdate(id,{$set: req.body},(err)=>{  //usar id para consulta e $set para adicionar
            if (!err) {
                res.status(200).send({message: "O autor foi atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })  
    }
    
    static excluirAutor = (req,res)=>{
        const id = req.params.id;
        
        autores.findByIdAndDelete(id, (err) =>{
            if (!err) {
                res.status(200).send({message: `Autor removido com sucesso`})
            } else {
                res.status(500).send({message:err.message})
            }
        })
    }
};

export default AutorController
