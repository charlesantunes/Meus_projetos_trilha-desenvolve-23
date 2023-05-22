
const user = {
    nome: 'Michele',
    email: 'michele@email',
    nascimento: '23/04/xxxx',
    role: 'estudante',
    ativo: true,
    exibirInfo: function() {
        console.log(`${this.nome}, ${this.email}`)
    }
}



const admin = {
    nome: 'Charles',
    email: 'charles@email',
    role: 'admin',
    criarCurso() {
        console.log('Curso criado')        
    }
}

Object.setPrototypeOf(admin,user) //primeiro parametro é quem vai herdar e o segundo é quem vai passar
admin.criarCurso()
admin.exibirInfo()

//obs1: coloque no console do navegador todas as informações a cima e verifique os objs com .__proto___, ou seja, admin.__proto__, pode ser várias camadas, admin.__proto__.__proto___.
//obs2: admin.__proto__ => vai acessar o objeto anterior que junto com ele passa todas suas informações para admin que no caso é obj user e o admin tb tem acesso mais os metodos que podem ser usados por ele admin mesmo.
//obs3: admin.__proto__.__proto__ => vai acessar duas camadas dentro do admin, no caso uma camada é o user e a outra camada como não tem mais objetos, vai acessar os metodos que todo objeto tem ao ser criado.

/**
Uma criosidade => todo tipo primitivo e Array é objeto! ou seja, por de baixo dos panos, tudo é objeto(String,Array,Num....)
pq tudo tem metodos para ser acessados com o ponto e ponto é coisa de obj.
//ex: String.prototype, vai acessar os metodos que podem ser usados com a String.
ex2: Array.prototype, mostra os metodos que podem ser acessados no Array.
Resumindo, que tudo é objeto, mas o __proto__ é oculto e não mostra os metodos dos tipos primitivos.

teste no console do navegador.

nota: prototype não se usa mais, pos foi substituido por henrança de classes
*/

console.log('==================diferença de __proto__ para prototype==========================')
/*
Protótipos de duas formas diferentes, através da propriedade __proto__ ou do objeto prototype.
Qual a diferença?
*/

/**
 No trecho abaixo, definimos dois objetos, com propriedades diferentes, e estabelecemos que o objeto user será usado como protótipo para o objeto estudante. Podemos testar esse código direto no terminal:
 */
let user2 = {
    perfil: 'estudante'
}

let estudante2 = {
    nome: 'juliana'
}

Object.setPrototypeOf(estudante2, user2)

console.log(estudante2.nome2) // 'juliana'
console.log(estudante2.perfil2) //'estudante'

// Ou seja, o objeto estudante, além da propriedade nome, também tem a propriedade perfil, trazida do protótipo user.

console.log('==================acesso pelo console do navegador==========================')
//É possível acessar __proto__ de estudante, porém, para isso, devemos copiar o código acima e executá-lo no console do navegador, pois o módulo console do NodeJS funciona de uma forma um pouco diferente e não vai acessar essa propriedade.

//depois de digitar o codigo de cima, digitar depois o código abaixo:
//estudante2.__proto__      //perfil: 'estudante', ativo:true

/**
 Quando usamos objetos e funções para trabalhar com orientação a objetos com JavaScript, os objetos criados não são instâncias diferentes (ou seja, cópias do objeto-base) e sim referências a um mesmo objeto que está sendo delegado aos objetos que o usam como protótipo.
 */

console.log('==================outro exemplo==========================')

//Agora vamos ver outro exemplo, dessa vez utilizando new para criar um novo objeto:
function User2() {} //uso de U maiusculo pq é uma classe
User2.prototype.perfil = 'estudante'
let estudante3 = new User2()

console.log(estudante3.perfil) //'estudante'
/**
 No caso acima, a palavra-chave new vai criar um novo objeto simples e definir, na propriedade prototype desse objeto recém criado, as propriedades de protótipo que encontrar em User. O prototype é criado automaticamente e existe como propriedade apenas em funções, para quando queremos usar determinada função como construtor usando new.
 */

 //O PROTÓTIPO DOS OBJETOS ESTÁ EM PROCESSO DE SER DESCONTINUADO.