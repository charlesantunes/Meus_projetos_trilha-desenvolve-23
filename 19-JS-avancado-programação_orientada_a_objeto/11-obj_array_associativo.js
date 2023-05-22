/*
Há duas formas de acessar o valor de propriedade de um objeto no JavaScript e podemos usar qualquer uma delas. 
*/
console.log('================exemplo01=====================')
const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo:function(propriedade,tipo){
                    this[propriedade].push(tipo)
                  }
}

//segue as 2 formas de exibir os resultados da consulta
console.log(colecionador.idade);
console.log(colecionador["idade"]); // apesar de usar aspas, não converte para string.


console.log(typeof(colecionador["idade"])); // typo number

console.log('================exemplo02=====================')
//adicionando dinamicamente apartir da função adicionarTipo
for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
}

console.log(colecionador)
