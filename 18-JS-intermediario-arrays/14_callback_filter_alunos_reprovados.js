//filter() = filtra o valor e se a condição for verdadeira, valor é armazena na const reprovados.
//Mostrar quem foi reprovado
const alunos = ['Charles','Michele','Ana Liz','Antunes'];
const notas = [7,4.5,8,7.5];

                              ['Michele'][1]      [4.5]  [1]
const reprovados = alunos.filter((nome,indice) => notas[indice] < 5) //como nome não está sendo usado, ele pode ser substituido por underline _, padrão usado.

console.log(reprovados);