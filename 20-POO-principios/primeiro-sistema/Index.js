//Index foi criado para chamar todas as Classes, limpando o código das classes
import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

//será instanciada aqui os objetos das classes importadas==============
console.log('=============Classe Admin=============')
const novoAdmin = new Admin('Ana Liz', 'ana@email','1983-19-09');


console.log('=============Classe Docente=============')
const novoDocente = new Docente('michele', 'miche@email','1981-04-23');


console.log('=============Classe User=============')
const novoUser = new User('Ana Liz', 'ana@email','1983-19-09');
console.log(novoUser.nome);
novoUser.nome = 'Ana Liz do Nascimento Antunes';
console.log(`Novo nome é ${novoUser.nome}`);
