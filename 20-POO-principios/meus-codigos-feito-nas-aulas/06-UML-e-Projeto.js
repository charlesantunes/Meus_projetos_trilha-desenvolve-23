/*
Modelagem do Projeto feito no UML
Então essa é a base, esse diagrama de classes vai ser a base de onde vamos começar a trabalhar para criar os nossos primeiros objetos. Então temos um usuário, um objeto usuário, uma classe usuário que estou chamando de user, ela tem um nome, ela tem propriedades e tem comportamentos. A partir dessa classe, então temos outras duas classes, admin e docente, que saem de usuário e vão ter a mesma estrutura, porém, com privilégios a mais que vamos definir.
*/

const user = {
    nome: 'Charles',
    email: 'charles@email',
    nascimento: '19/09/xxxx',
    role: 'Dev',
    ativo: true,
    exibirInfo: function() {
        console.log(`${this.nome}, ${this.email}`)
    }
}

console.log('========================chamada do obj normal================================')
user.exibirInfo() //chamada normal

console.log('======================chamada usando a função com erro============================')
const mostrarNome1 = user.exibirInfo; //passando toda a função para o obj
mostrarNome1(); // underfine = pq o this da função não está vendo nem um obj nome e email para apontar
console.log('==================chamada usando a função com bind e corrigi o erro=================')
const mostrarNome2 = user.exibirInfo.bind(user); //agora sim a função usa o bind para aponta para obj e o this vai encontrar os objs.
mostrarNome2();
