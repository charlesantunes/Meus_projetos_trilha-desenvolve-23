//ForEach = Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.

//callback = uma função dentro da outra: forEach() e dentro dela function(element){somaNotas+=element;}
//forReach() = NÃO retorna nada

const num = [10, 6.5, 8, 7.5];
let somaNotas = 0;

num.forEach(element => {
    somaNotas+=element;
});

console.log(`A média dos números ${num}\né ${somaNotas / num.length}`)
