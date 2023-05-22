//Atualizando Arrays: splice()
const listaAlunos = ['João','Ana','Caio','Lara','Majorie','Léo'];
listaAlunos.splice(1,3,'Charles','Michele','Ana Liz'); //1 é apatir do indice que será atualizado, 3 é a quantidade de elementos que vão ser removidos apartir do indice 1, obs: se no lugar do 3 colocar 0, assim não será removido nada e sim só adicionado. Depois o terceiro parametro que é 3 que adicionar 3 elementos, no caso 'Charles','Michele','Ana Liz'.
console.table(listaAlunos);

let alunosAdicionados = listaAlunos.splice(1,3,'Charles','Michele','Ana Liz');
console.log(`Novos alunos adicionados foram: ${alunosAdicionados}`);