import express from "express";
import db from "./config/dbConnect.js";

const app = express();

app.use(express.json()) //converte o entra como json() em objeto e ser tratado

//simulando uma biblioteca para testar a visualizar dos livros na página.
const livros = [
    { id: 1, "titulo" : "Senhor dos Aneis" },
    { id: 2, "titulo" : "O Hobit" }
]

//====================== Pesquisa todos os Livros=========================================
//rotas com as infos
app.get('/', (req,res)=>{  //buscar as inf da home
    res.status(200).send('Curso de Nodejs com API'); // resposta e msg
})

app.get('/livros',(req,res)=>{
    res.status(200).json(livros) //convertendo p json os arquivos recebidos
})

//====================== Pesquisa um Livro============================================
app.get('/livros/:id', (req,res)=>{
    let index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
})

//====================== Adicionar ================================================
app.post('/livros', (req,res)=>{
    livros.push(req.body)   //push() = adicionar, o que estiver no corpo, adiciona em livros
    res.status(201).send('O Livro foi cadastrado com sucesso')
})

//====================== Atualizar ================================================
app.put('/livros/:id', (req,res)=>{
    let index = buscaLivros(req.params.id);// req.params.id é o id do endereço
    livros[index].titulo = req.body.titulo; //atualiza o títudo do corpo
    res.status(201).json(livros)
})

//====================== Atualizar ================================================
app.delete('/livros/:id', (req,res)=>{
    let {id} = req.params; //{id}= desestruturação por parametro, quando atribuimos um parametro a uma variável, vem entre chaves. 
    let index = buscaLivros(id);// req.params.id é o id do endereço
    livros.splice(index,1)//1º a posição do indice p/ apagar, depois a qtde que será apagado.
    res.status(200).send(`Livro ${id} removido com sucesso`)
})

//====================== Função usado no pesquisar por um livro e editar =======================
function buscaLivros(id) { //func p/ buscar livro pelo id, depois ela é substituida pelo bd
    return livros.findIndex(Element => Element.id == id)//findIndex() = verifica todos indices
}

export default app  //exportando para esses dados serem trabalhados no server.js