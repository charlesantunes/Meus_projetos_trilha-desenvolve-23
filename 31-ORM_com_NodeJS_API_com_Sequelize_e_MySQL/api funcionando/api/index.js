const express = require('express');
//const bodyParser = require('body-parser');  //enviado para routes
const routes = require('./routes')


const app = express(); //app está sendo chamado em routes

/*enviado para routes
app.use(bodyParser.json()); //pega as requisoes dos tipo post e converte para json, assim podendo ser tratado no js.
*/

const port = 3000; //porta usada para receber as requisições.
/*
//rota de teste de comunicação com o servidor
app.get('/teste', (req, res) => res.
status(200) //200 é que a solicitação esta ok
.send({message: 'boas-vindas à API do Charles'}))   //send = é uma resposta p/ requisição

//rota de teste que vai ser valendo, vamos mandar e acessar na pasta routes/routes.js
*/

routes(app) // passando as informações de routes para app

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))    //listen = fica verificando a porta da comunicação

module.exports = app;