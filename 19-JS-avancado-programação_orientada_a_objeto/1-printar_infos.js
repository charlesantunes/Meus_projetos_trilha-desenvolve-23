//Acessar um objeto com informações de um cliente e exibir essas informações no console.
const cliente = {
    nome:'Charles',
    idade:39,
    cpf: '78588874234',
    email: 'charles@gmail.com'
}

console.log(`Nome do cliente é ${cliente.nome}, seu CPF é ${cliente.cpf}`);

console.log(cliente.cpf.substring(0,3)); //substring() exibe uma certa quantidade de caracter da string, no caso inicia do zero até o indice 3