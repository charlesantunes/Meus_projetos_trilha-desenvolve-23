/*
 Adicionar dependentes para cada um dos clientes cadastrados no sistema do banco, com o nome, idade e parentesco.
*/
console.log('=============exemplo 1===================');
const cliente = {
   nome:'Charles',
   idade:39,
   cpf: '78588874234',
   email: 'charles@gmail.com',
   telefone: ['(91)222222222','(85)333333333']
};
cliente.dependentes = [{
      nome:'Ana Liz',
      parentesco:'Filha',
      dataNasc: '02/01/2022',
      telefone: ['(91)444444444','(85)555555555']
   },{
      nome:'Lilica',
      parentesco:'Conjuge',
      dataNasc: '23/04/1983',
      telefone: ['(91)666666666','(85)777777777']
   }];

   console.log(cliente);
   
   console.log('=============exemplo 2===================');
   //alterar o nome lilica para Michele
   cliente.dependentes[1].nome = 'Michele';
   console.log(cliente);