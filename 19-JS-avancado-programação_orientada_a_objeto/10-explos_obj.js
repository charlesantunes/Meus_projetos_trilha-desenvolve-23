const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = objPersonagem //se todo obj for string ou literal, quando modifica o novo obj, o que passou os dados ou referencia tb mudifica junto.
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

console.log('=============================================')

let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100

console.log('=============================================')

const objPerso = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPerso2 = Object.create(objPerso) // quando um objeto copiar os dados de um Object.create(), ele vira outro objeto, no caso do objPerso2 é outro objeto.
objPerso2.nome = "Gandalf, o Cinzento"

console.log(objPerso.nome) //Gandalf
console.log(objPerso2.nome) //Gandalf, o Cinzento