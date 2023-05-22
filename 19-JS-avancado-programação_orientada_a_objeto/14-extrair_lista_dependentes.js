/**
 * extrair de uma listagem de clientes apenas as informações de dependentes e aí montamos uma lista única com esses dependentes para análise de outros departamentos do banco
 */
const cliente = [{
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
},{
    nome:'fulando',
   idade:39,
   cpf: '78588874234',
   email: 'charles@gmail.com',
   telefone: ['(91)222222222','(85)333333333'],
   dependentes:[{
      nome:'Fulano Ana Liz',
      parentesco:'Filha',
      dataNasc: '02/01/2022'
   },{
      nome:'fulano Michele',
      parentesco:'Conjuge',
      dataNasc: '23/04/1983'
   }],
   saldo:100,
   depositar: function (valor){
        this.saldo+=valor
   }
}];

console.log('===============resolução da aula com cliente sendo array======================')
const consultaDependentes = (obj) =>{
    
   for (let i = 0; i < obj.length; i++) {
      const listaDependentes = [...obj[i].dependentes]; // ... ESPALHAMENTO OU spread operator, exibe os valores dos objetos de um array
      console.table(listaDependentes)
   }
}

consultaDependentes(cliente)