/**
 Apenas com teoria não é possível aprender código, então, vamos exercitar a utilização do data-attribute em funções neste desafio. Temos uma lista de cores disponibilizada no código abaixo. Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir.

Você pode chegar ao mesmo resultado de diferentes formas. Então, fique à vontade para compartilhar a sua solução para este desafio no Fórum!

Como fazer:

Utilize os códigos HTML e CSS disponibilizados;
Crie o arquivo de código JS;
Referencie o arquivo JS no HTML.
 */

//tentar fazer aqui..

// document.querySelector(".close").addEventListener("click", () => {
//   lista.setAttribute("novaLista", "esconder");
// });


/**resposta
 */
 const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});



/**Explicação do código:

A variável lista, serve para referenciar a ul, utilizando o método querySelector.

A segunda linha de código cria um evento de clique, referenciando o botão, pelo id #botao. Essa mesma linha poderia ser escrita da seguinte forma: const botao = document.querySelector("#botao") botao.addEventListener("click", () =>

No método addEventListener, é passado o que deve acontecer com o clique, que é alterar algum atributo, com o método setAttribute, de "data-lista", para "mostrar".

Esses são os data attributes no arquivo CSS:

[data-lista="mostrar"] { display: block; } [data-lista="esconder"] { display: none; }

O segundo bloco de código realiza a mesma operação de alteração dos data-attributes, só que alterando dessa vez a partir do clique no botão com a classe .close
 */