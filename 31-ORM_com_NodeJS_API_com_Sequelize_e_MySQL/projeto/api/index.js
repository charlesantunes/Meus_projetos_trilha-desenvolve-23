const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //pega as requisoes dos tipo post e converte para json, assim podendo ser tratado no js.

const port = 3000; //porta usada para receber as requisições.

app.get('/teste', (req, res) => res.
status(200) //200 é que a solicitação esta ok
.send({message: 'boas-vindas à API do Charles'}))   //send = é uma resposta p/ requisição 

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))    //listen = fica verificando a porta da comunicação 