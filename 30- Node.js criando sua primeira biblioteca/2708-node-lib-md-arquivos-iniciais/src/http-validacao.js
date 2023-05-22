import chalk from "chalk";

function extraiLinks(arrLinks) { //3 - retirar os links dos arrays e unificar em um só
    return arrLinks.map((objetoLink)=>Object.values(objetoLink).join())//join() = pega todos arrays e converte apena em um array com todos os itens dentro.
}

async function checaStatus(listaURLs) { //5 - retirar os links e verificar se tem status 404
    const arrStatus = await Promise.all( //all usa - se quando temos várias promessas para resolver
        listaURLs.map(async(url)=>{
            try {
                const response = await fetch(url)
                return response.status; // extrai o status cod de cada link e retorna como promessa para quem chamou a função 
                } catch (error) {
                if (error.cause.code == 'ENOTFOUND') {
                    return 'link não encontrado'
                }else{
                    return 'ocorreu algum erro'
                }
            }
        })            

    )
    return arrStatus;
}

function manejaErros(erro) {
    console.log(chalk.red('Algo deu errado'), erro)
}

export default async function listaValidada(listaDeLinks) { //1
    const links = extraiLinks(listaDeLinks) //2 - tras o array único c/ os links sem validação
    const status = await checaStatus(links) //4- envia os links em um unico array para ser testado
    //console.log(status);
   // return status;
   return listaDeLinks.map((obj, indice)=>({ //6 - vamos tratar obj e chaves é padrão da arrow function, assim precisa ser envolvida por parenteses 
        ...obj,     //adicionar uma propriedade de status cod nos arrays c/ os links 
        status: status[indice]
   }))
}

//[gatinho salsicha](http://gatinhosalsicha.com.br/)