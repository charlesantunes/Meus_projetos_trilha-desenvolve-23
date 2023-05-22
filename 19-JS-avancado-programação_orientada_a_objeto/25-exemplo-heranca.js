//Crie um novo arquivo e o nomeie como “herancaJS.js” e codifique conforme a imagem abaixo:

class Cliente {
 constructor(nome, email, cpf, saldo){
   this.nome = nome
   this.email = email
   this.cpf = cpf
   this.saldo = saldo
 }

 depositar(valor){
   this.saldo += valor
 }

 exibirSaldo(){
   console.log(this.saldo)
 }
}
//Acabamos de definir uma classe de cliente com uma série de propriedades (características) e comportamentos (métodos ou funções). Vamos criar uma nova classe que vai herdar as características do cliente e terá um comportamento específico. Então após a definição de Cliente adicione:

class ClientePoupanca extends Cliente {
 constructor(nome, email, cpf, saldo, saldoPoupanca){
   super(nome, email, cpf, saldo)
   this.saldoPoupanca = saldoPoupanca
 }

 depositarPoupanca(valor){
   this.saldoPoupanca += valor
 }
}

//Já temos um novo tipo de objeto com um comportamento único, o depositarPoupanca() . Vamos instanciar um novo objeto da nova classe criada.

const andre = new ClientePoupanca("Andre", "a@mail.com", "12312312312", 100, 200)

//E note, a invocação de dois comportamentos do objeto andre.
andre.depositar(50)
andre.depositarPoupanca(50)


/*
Por meio da herança é possível invocar propriedades e comportamentos definidos na classe base, aquela de quem ClientePoupanca herda, e invocar o método específico da poupança.

Mas porque isso é útil? A resposta é que reaproveitando o código não é necessário reescrever o método depositar(), O objeto tem acesso a esse método pelo mecanismo da herança.

Pratique bastante e se precisar peça a ajuda da nossa comunidade no fórum da Alura!
*/