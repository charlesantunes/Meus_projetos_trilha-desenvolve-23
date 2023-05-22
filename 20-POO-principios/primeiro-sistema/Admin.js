import User from "./User.js";

export default class Admin extends User{
    constructor(nome,email,nascimento,role='Admin',ativo = true){ //colocar os parametros que vai ser usado da classe User, coloque apenas os que precisar, no caso vou querer todos.
        super(nome,email,nascimento,role,ativo)// apenas os parametros da User que vai ser usado.
    }
    criarCurso(nomeDoCurso,vagas){
       return `O curso ${nomeDoCurso} com ${vagas} vagas, foi criado com sucesso!`;
    }
};

/*
//enviado para Index.js
const novoAdmin = new Admin('Ana Liz', 'ana@email','1983-19-09');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfo());
console.log(novoAdmin.criarCurso('Dev Front end',20));
*/