/**
 * Percorrer um objeto, no caso nosso objeto cliente, verificar se existe a chave dependente, se existir, enviar uma mensagem de oferta de seguro, normalmente as pessoas que têm dependentes elas estão mais interessadas em, por exemplo, um seguro de vida, um seguro de casa, etc.
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

//pode usar o for in para identificar a propriedade, mas vai ser usado Object.keys().

const oferecerSeguros = (nomeCliente) =>{
  const propsClientes = Object.keys(nomeCliente); // retornar apenas as propriedades
//   const propsClientes = Object.values(nomeCliente); // retornar apenas os valores das propriedades
//   const propsClientes = Object.entries(nomeCliente); // retornar os valores e as propriedades dentro de arrays.

   if (propsClientes.includes('dependentes') ) {
      console.log(`Bom dia ${cliente.nome}, Temos umas boas ofertas de seguro!`)
   } else {
      console.log(`${nomeCliente.nome}, não tem depententes`)
   }
}

oferecerSeguros(cliente)
