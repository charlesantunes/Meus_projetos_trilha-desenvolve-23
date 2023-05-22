/*
 Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimir-la, verificando se há mais de um número em algum cadastro, ou seja, se o cliente tiver mais de um número temos que imprimir os dois números.
*/
const pessoa = {
   nome:"Bruce Banner",
   dataNascimento:"25/01/1980",
   carteiraIdentidade:"997776-X",
   email:"profbanner@email.com",
   telefone: ['91222222222','85333333333'],
   cidade:"Cachoeiro de Itapemirim",
   estado:"ES"
}

//será usado o forEach pq não precisa manipular dados ou retornar, apenas mostrar, caso contrario seria o map().
pessoa.telefone.forEach(item => console.log(`Telefone: ${item}`));