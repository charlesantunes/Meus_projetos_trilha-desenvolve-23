/*
adicionar uma propriedade que permita ações, para que os clientes que estão cadastrados no sistema do nosso banco, consigam fazer operações bancárias, por exemplo, depositar, sacar, etc.
*/
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
   }],
   saldo:100,
   depositar: function (valor){
        this.saldo+=valor
   }
};

console.log(cliente.saldo);

cliente.depositar(50);
console.log(cliente.saldo);
