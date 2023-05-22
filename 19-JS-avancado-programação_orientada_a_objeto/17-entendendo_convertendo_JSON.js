
/*
//Formato JSON:
{
    "id": 59,
    "titulo": "ECMAScript 6",
    "autor": "Diego Martins de Pinho",
    "categoria": "programação"
}

//Formato XML:
<livro id="59">
<titulo>ECMAScript 6</titulo>
<autor>Diego Martins de Pinho</autor>
<categoria>programação</categoria>
</livro>

*/


/**

{
    "editora": "Casa do Código",
    "catalogo":[
        {
            "id": 50,
            "titulo": "Primeiros Passos com NodeJS",
            "autor": "João Rubens",
            "categoria": "programação",
            "versoes": ["ebook", "impresso"]
        },
        {
            "id": 59,
            "titulo": "ECMAScript 6",
            "autor": "Diego Martins de Pinho",
            "categoria": "programação",
            "versoes": ["ebook"]
        },
        {
            "id": 39,
            "titulo": "Orientação a Objetos",
            "autor": "Thiago Leite",
            "categoria": "programação",
            "versoes": ["ebook", "impresso"]
        }
    ]
}


console.log("==============conversão de JSON para JS ou contrario=================")
As diferenças de sintaxe entre JSON e um objeto JavaScript são:

No JSON, as chaves sempre devem estar entre aspas duplas ” ”, no formato string. Já no objeto JavaScript, as aspas não são obrigatórias;
O JSON aceita como valores apenas dados primitivos (string, number para números finitos, true, false e null), objetos e arrays. Não é possível declarar funções/métodos;
Não são permitidas vírgulas após o último conjunto de chave/valor do objeto.

JSON.parse(): converte JSON para um objeto JavaScript;
JSON.stringify(): converte um objeto JavaScript para o formato

*/

const jsonLivro = JSON.stringify({
 id: 50,
 titulo: "Primeiros Passos com NodeJS",
 autor: "João Rubens",
 categoria: "programação",
 versoes: ["ebook", "impresso"]
})

//console.log(jsonLivro)
const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)