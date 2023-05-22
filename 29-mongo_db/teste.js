//inserindo 3 valores na tabela do mongodb
const tabelaMongo = new Object(
    {
    "nome":"Charles",
    "data_nascimento": new Date(1988,09,19),
    "curso":{
        "nome":"Sistemas de Informação",
        },
    "notas":[10.0,7.5,8.0,5.0],
    "habilidades":[
        {
        "nome":"Inglês",
        "nível":"Técnico"
        },
        {
        "nome":"futebol",
        "nível":"Craque"
        }
        ]
    },
    {
    "nome":"Carol",
    "data_nascimento": new Date(1993,05,12),
    "curso":{
        "nome":"Segurança da Informação",
    },
    "notas":[10.0,7.5,8.0,5.0],
    "habilidades":[
        {
        "nome":"Inglês",
        "nível":"Intermediario"
        },
        {
        "nome":"Game",
        "nível":"profissional"
        }
    ]

    }
)

const tabelaMongo2 = new Object(
    {
    "nome":"Carol",
    "data_nascimento": new Date(1993,05,12),
    "curso":{
        "nome":"Segurança da Informação",
        },
    "notas":[10.0,7.5,8.0,5.0],
    "habilidades":[
        {
        "nome":"Inglês",
        "nível":"Intermediario"
        },
        {
        "nome":"Game",
        "nível":"profissional"
        }
        ]
    }
)

const tabelaMongo3 = new Object(
    {
    "nome":"Herik",
    "data_nascimento": new Date(1990,02,26),
    "curso":{
        "nome":"Desenvolvedor Web",
    },
    "notas":[10.0,7.5,8.0,5.0],
    "habilidades":[
        {
        "nome":"Inglês",
        "nível":"Avançado"
        },
        {
        "nome":"piloto",
        "nível":"veloz"
        }
    ]

    }
)
console.log(tabelaMongo)