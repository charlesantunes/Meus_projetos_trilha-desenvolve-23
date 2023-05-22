//Relembrando os tipos de função

console.log('===================primeira função - declaração de função======================')
//A primeira versão, mais “clássica” e muito parecida com outras linguagens:
function soma(num1, num2) {
 return num1 + num2;
}
//É a chamada “declaração de função”. Usa o sistema de hosting.

console.log('===================segunda função - expressão de função=========================')
//A segunda forma atribui a função a uma variável, funcionalidade que já não é tão comum em outras linguagens:
const soma = function(num1, num2) {
 return num1 + num2;
}
//Chamamos essa forma de “expressão de função”.

console.log('===================terceira função - arrow function=============================')
//A terceira e última forma é a arrow function ou “função de seta”, caracterizada pelo operador =>:
const soma = (num1, num2) => {
 return num1 + num2;
}
//Ou, no caso de blocos de código com apenas uma linha, podemos omitir o return e as chaves {}:
const soma = (num1, num2) => num1 + num2;
//Bem mais curto! A arrow function também é uma expressão de função.

console.log('===================Diferença entre as 3 funções=================================')
/**
 * A primeira diferença é um pouco mais teórica. Funções criadas como declaração recebem um identificador (ou seja, um nome), e funções criadas como expressão são consideradas anônimas - estas funções são atribuídas a variáveis e é através dessas variáveis que conseguimos chamá-las e executá-las.
 * 
 * A primeira diferença é um pouco mais teórica. Funções criadas como declaração recebem um identificador (ou seja, um nome), e funções criadas como expressão são consideradas anônimas - estas funções são atribuídas a variáveis e é através dessas variáveis que conseguimos chamá-las e executá-las.
 */

/**
 * Já as expressões de função, que são anônimas, não passam pelo processo de hoisting e têm seu conteúdo interpretado apenas no momento da execução. Assim, o interpretador (seja o Node.js ou um navegador) não consegue executar a função sem ter lido seu conteúdo antes.

  Por exemplo, o código abaixo (uma declaração de função) executa normalmente:
*/
console.log(soma(1, 1)) //2

//é possível executar a função antes de declará-la no código
function soma(num1, num2) {
 return num1 + num2;
}

//Porém o código abaixo (uma expressão de função) não executa:
console.log(soma(1, 1)) //erro

//ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1, num2) {
 return num1 + num2;
}

//O mesmo erro acima ocorreria com uma arrow function. Faça o teste!
console.log('============================================================')
console.log('============================================================')
