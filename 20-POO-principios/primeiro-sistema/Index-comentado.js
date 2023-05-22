//Index foi criado para chamar todas as Classes, limpando o código das classes
import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

//será instanciada aqui os objetos das classes importadas==============
console.log('=============Classe Admin=============')
const novoAdmin = new Admin('Ana Liz', 'ana@email','1983-19-09');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfo());
console.log(novoAdmin.criarCurso('Dev Front end',20));

console.log('=============Classe Docente=============')
const novoDocente = new Docente('michele', 'miche@email','1981-04-23');
console.log(novoDocente.aprovarEstudante('Bruno',6,3)); //reprovado

console.log('=============Classe User=============')
const novoUser = new User('Ana Liz', 'ana@email','1983-19-09');

console.log(novoUser.exibirInfo());
//novoUser.#nome = 'Charles'; //erro = propriedade privada, está com # para idenficar o encapsulamento, só pode adicionar dados na hora de instanciar

console.log('=============acessando a Classe User com gets e setters=============')
console.log(novoUser.nome); //repare que nome é um método e não precisa de () pq é get e setters.
