/*for in = manipula objetos.
percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco.

 como que fazemos para percorrer um objeto, uma vez que um objeto ele não tem número de índice, ele é uma lista não ordenada, então nome, idade, cpf, eles não necessariamente podem estar na mesma ordem, então André como que fazemos para percorrer um objeto sem precisar dos índices do array, e sem precisar ficar fazendo, o cliente.nome, cliente.idade, cliente.cpf, etc.
    dica: usar for in.
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

let relatorio = ''; // aqui vamos adicionar as informações básicas
//key passar apenas as propriedades = nome, idade, cpf, email, telefone, dependentes
for (const key in cliente) {
    //relatorio += key+', '; //exibe as propriedades
    //relatorio += cliente[key]+', '; // exibe os valores das propriedades
    if ((typeof cliente[key] === 'object') || (typeof cliente[key] === 'function')) {
        continue //isso quer dizer que não exiber o que está no if e passa para o else       
    }else{
        //quebrando linha no tamplate string, no resultdo, quebra a linha tb
        relatorio += `
        ${key} -> ${cliente[key]}
        `; 
    }
}

console.log(relatorio);