/*
verificar a melhor forma de agregar informação de um novo dependente ao objeto cliente.
*/
console.log('=============exemplo 1===================');
//Adicionar elementos em um array, usa o push()
const cliente = {
   nome:'Charles',
   idade:39,
   cpf: '78588874234',
   email: 'charles@gmail.com',
   telefone: ['(91)222222222','(85)333333333'],
   dependentes:[{
      nome:'Ana Liz',
      parentesco:'Filha',
      dataNasc: '02/01/2022'
   },{
      nome:'Michele',
      parentesco:'Conjuge',
      dataNasc: '23/04/1983'
   }]
};

cliente.dependentes.push({
    nome:'Eve',
    parentesco:'Filha',
    dataNasc: '02/07/2023'})

    console.log(cliente);

console.log('=============exemplo 2===================');
//realizar uma pesquisa por dataNasc.
const filhaNova = cliente.dependentes.filter(item => item.dataNasc === '02/07/2023')
console.log(filhaNova[0].nome);

