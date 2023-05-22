//Array bidimencional ou (Matriz)
//Exibir nome e nota da aluna qualquer
const alunos = ['Charles','Michele','Ana Liz']
const notas = [10,7,5]

const alunos_notas = [alunos,notas];

console.log(alunos_notas)
console.table(alunos_notas)

console.log(`A nota da aluna ${alunos_notas[0][2]} é ${alunos_notas[1][0]}`) // dividi em linhas, 0 primeira linha alunos, 1 segunda linha notas;