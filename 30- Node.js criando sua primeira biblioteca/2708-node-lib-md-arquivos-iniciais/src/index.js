import fs from 'fs'
import chalk from 'chalk'; //usar cores nas respostas

/*formas de usar o chalk 

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
*/


function extraiLink(texto) { //2- função que filtra o texto e retira os links
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;  //precisa colocar a regex entre 2 barra // e colocar gm e ponto e virgula no final
    //const capturaLink = texto.match(regex); // match() extrai apenas string - veja mais funções regulares em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    const capturaLink = [...texto.matchAll(regex)]; //espalhando todo contendo da função matchAll() dentro de um array
    const result = capturaLink.map(capturaLink =>({[capturaLink[1]]: capturaLink[2]})) // a chave foi envolvido em paranteses para evitar erro nos arrays
    return result.length !== 0 ? result : "Não há links no arquivo" 
}

function trataErro(erro) {  //1.1
    console.log(erro);
    throw new Error(chalk.red(erro.code,"não há arquivo no diretorio"))
}

//async/ await
async function pegaArquivo (caminhoDoArquivo) { //1 func que vai exportar arquivo com links
    try {
        const encoding = 'utf-8'; //tipo da linguagem do texto do arquivo 
        const textArquivo = await fs.promises.readFile(caminhoDoArquivo,encoding) // 
       // console.log(chalk.green(textArquivo))
        return extraiLink(textArquivo) //não esquecer de tirar o console.log e deixar a chamada da função extraiLink(textArquivo)
    } catch (erro) {
        trataErro(erro)
    } finally { //executa sempre, independente do try ou catch
   console.log(chalk.yellow('operação concluída'));
 }
}

export default pegaArquivo;
//pegaArquivo('./arquivos/texto.md')
//pegaArquivo('./arquivos/')




/*expressão regular (Regex)
filtar a pesquisa de texto em só o que estiver entre cochetes
\[[^[\]]*?\]

filtar a pesquisa de texto em só o que estiver entre parenteses e seja comece com http, o s não é obrigatório
\(https?:\/\/[^\s?#.].[^\s]*\)

juntando as duas Regex
\[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)

separando em 2 grupos(cod dos colchetes e cod dos links) usando parentes(essa que será usada)
\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)

*/

/* usando then()
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo,encoding)
    .then(texto=> console.logo(chalk.blue(texto)))
    .catch(trataErro)
}
*/

/*esses códigos são não async 
function pegaArquivo(caminhoDoArquivo) {
    fs.readFile(caminhoDoArquivo,encoding, (erro,texto)=>{
        if (erro) {
            trataErro(erro)
        }
        console.log(chalk.green(texto))
    })
}
*/
