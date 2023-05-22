
/*
//laços de repetição com toUpperCase()
const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
    nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA
//==========================================================

//Juntar frases
const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura

//===========================================================
//Desafio: Seguindo a mesma lógica, use métodos modernos, como map() e filter() com strings?
//minha resolução
const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"
let nomeMaiusculas = nomedoCurso.concat(nomeDaPlataforma);
console.log(nomeMaiusculas.toUpperCase());

//===================================
*/
//usando map() para chamar função
const arrayNums = [1, 2, 3, 4];

function multiplica10(valor) {
    return valor * 10
}

const numCalculado = arrayNums.map(multiplica10)

//em cima é o mesmo que const 
//arraySomada = arrayNums.map(num => num * 10)
console.log(numCalculado);

