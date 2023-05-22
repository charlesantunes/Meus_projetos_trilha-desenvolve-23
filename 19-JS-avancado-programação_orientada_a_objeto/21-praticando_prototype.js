/*
 O Javascript é uma linguagem que a partir do ES2015 possibilitou o trabalho com classes para quem desenvolve em outras linguagens. Porém, ainda permanece sendo baseada em protótipos.

Será que conseguimos utilizar herança com protótipos?

A resposta é: Sim. Para tratar a herança com protótipos podemos criar uma cadeia em que um protótipo acessa o outro de um nível superior e assim por diante. E aí? Vamos praticar? Como fizemos no vídeo, escreva uma função construtora para criar um novo cliente.
 */

//Iniciaremos com a criação de um novo arquivo chamado ” clientePrototipo.js” e adicionando o código abaixo a ele, para definir construtores de objetos.
function Cliente (nome, cpf, email, saldo) {
 this.nome = nome
 this.cpf = cpf
 this.email = email
 this.saldo = saldo
  this.depositar = function(valor){
   this.saldo += valor
 }
};
const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100);

//Agora vamos definir um construtor que utiliza o Cliente para gerar um novo tipo de cliente.
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
 Cliente.call(this, nome, cpf, email, saldo)
 this.saldoPoup = saldoPoup
}
const ju = new ClientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200)

//Agora vamos manipular o comportamento do protótipo do objeto ClientePoupanca, adicionando o código abaixo:
ClientePoupanca.prototype.depositarPoup = function(valor){
 this.saldoPoup += valor
}

//Então podemos testar algumas propriedades e validar a ideia de cadeia de protótipos. Digite o seguinte:
console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)