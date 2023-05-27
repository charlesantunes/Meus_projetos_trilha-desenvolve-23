const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute')

//2-tirando a rota da index principal e colocando aqui.
module.exports = app => { 
   app.use(bodyParser.json())
   app.use(pessoas)
   
   /*envoadp para rotas 
   app.get('/', (req, res) => res.send('olá')
   status(200). //200 é que a solicitação esta ok
   send({message: 'boas-vindas à API do Charles'})
   */
   
}