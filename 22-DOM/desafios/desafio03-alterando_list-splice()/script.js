/**
 Chegou a hora de praticar! No desafio desta aula, temos uma lista de cores que serão utilizadas para pintar uma loja, porém o cliente informou que não deseja mais pintar com a cor "vermelha". Retire esta cor da lista utilizando um método do JavaScript. Utilize a lista abaixo como base:
 */
var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
console.log(lista);

lista.splice(1,1) // splice() remove apartir do indice no primeiro e quantos elementos removidos no segundo
console.log(lista);