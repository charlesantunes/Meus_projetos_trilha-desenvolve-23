//Consultar um objeto, utilizando uma lista de chaves relativa as informações dos clientes gerada pelo sistema e printar o resultado na tela.

console.log('====================exemplo01========================')
const clientes = {
    nome:'Charles',
    idade:39,
    cpf: '78588874234',
    email: 'charles@gmail.com'
};

const list = ['nome','idade','cpf'];
console.log(`O CPF do ${clientes.nome} é ${clientes[list[2]]}`)

console.log('====================exemplo02 - forRech========================')
list.forEach(item => console.log(clientes[item])); //list faz o pedido e se estiver em clientes, exibi na tela. obs:tirei o email da const list de proposito para não exibir.

console.log('====================exemplo03 - Array==========================')
 const clientes2 = [
 {
     nome:'Charles',
     idade:39,
     cpf: '78588874234',
     email: 'charles@gmail.com'
 },{
     nome:'Michele',
     idade:41,
     cpf: '85274185285',
     email: 'michele@gmail.com'
 },{
     nome:'Ana Liz',
     idade:01,
     cpf: '12345698732',
     email: 'analiz@gmail.com'
 }]

console.log(`Nome dos clientes são ${clientes2[0].nome}, ${clientes2[1].nome}, ${clientes2[2].nome}`);