//Dividindo Arrays (slice())
const listaAlunos = ['João','Júlia','Ana','Caio','Lara','Majorie','Guilherme','Aline','Fabiana', 'Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinícius','Renan','Renata','Daisy','Camilo'];

const sala1 = listaAlunos.slice(0,listaAlunos.length/2); //0 é onde começa e listaAlunos.length/2 é a metade do array
const sala2 = listaAlunos.slice(listaAlunos.length/2); // listaAlunos.length/2 é a metade do array e como não foi passado o 2º parametro, dessa forma vai ser todo a partir da metade.
console.log(`Sala 1 = ${sala1}\nSala 2 = ${sala2}` );