const { Router } = require('express'); //Router é nativo do express e é diferente de routes criado no index.
const PessoaController = require('../controllers/PessoaController')

const router = Router(); //pegando os metodos de Router()

//observe que foi preciso estanciar PessoaController, pq ele é static.
router.get('/pessoas',PessoaController.pegaTodasAsPessoas) //4.1 '/pessoas' é o caminho da página supostamente será criada (usamos no postman) 
router.get('/pessoas/:id',PessoaController.pegaUmaPessoa) //6.1 - caminho da consulta uma pessoa GET
router.post('/pessoas/',PessoaController.criaPessoa) //7.1 - caminho da consulta uma pessoa POST
router.put('/pessoas/:id',PessoaController.atualizaPessoa) //8.1 - caminho de atualiza pessoa PUT
router.delete('/pessoas/:id',PessoaController.apagaPessoa) //9.1 - caminho de atualiza pessoa PUT

//add rota de Matricula 13.2
router.get('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',PessoaController.apagaMatricula)


module.exports = router;