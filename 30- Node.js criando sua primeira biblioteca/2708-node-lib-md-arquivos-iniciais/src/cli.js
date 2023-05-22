import chalk from "chalk";
import pegaArquivo from "./index.js";
import fs from 'fs' //lib nativa do node
import listaValidada from "./http-validacao.js"

//Para facilitar a escrita no terminal, foi adicionado no package.json/  exatamente em "scripts": , o caminho que colocamos no terminal para executar os comando, fazendo assim que só escrevemos no arquivo final, mas em vez de digitar node ....., mudamos para npm run ....

const caminho = process.argv;//4
//console.log(caminho[2])

async function imprimeTexto(valida,resultadoElist,identificador = '') {
    if (valida) {
        console.log(
        chalk.yellow('Lista validada'), 
        chalk.black.bgGreen(identificador),
        await listaValidada(resultadoElist))
    }else{
        console.log(
            chalk.yellow('lista de links'), 
            chalk.black.bgGreen(identificador),
            resultadoElist)
    }
}

async function processaTexto(argumento) { //2 - pega os argumentos do package.json/scripts 
    const caminho = argumento[2]; // são 3 argumento no "cli": e estamos pegando o último
    const valida = argumento[3] === '--valida'; //são 4 argumentos no "cli:valida": que são eles 1.node, 2./src/cli.js, 3.arquivos/texto.md, 4.--valida
   // console.log(valida) //no terminal npm run cli:valida
    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if(erro.code === 'ENOENT'){
            console.log('Arquivo ou diretório não existe')
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) { //lstatSync() = verifica se a variavel é um caminho de arquivo. isFile() = tem retorno booleano, verifica se é um arquivo no final do caminho, no caso texto.md 
        const resultado = await pegaArquivo(argumento[2])
        imprimeTexto(valida,resultado)
    }else if(fs.lstatSync(caminho).isDirectory()){ //isDirectory() = tem retorno booleano, verifica se é um diretore ou uma pasta com todos os aquivos(isFile()) dentro. 
        const arquivos = await fs.promises.readdir(caminho) // readdir() retorna o nome dos arquivos que estiverem na pasta, se tiver mais de um, vai ficar dentro de um array.
        arquivos.forEach(async (nomeArquivos)=>{
            const list = await pegaArquivo(`${caminho}/${nomeArquivos}`) // pega o caminho onde estão os arquivos e o parametro leva o nome dos arquivos, assim monta o caminho até chegar no arquivo.
           // console.log(`${caminho}/${nomeArquivos}`)
            imprimeTexto(valida,list,nomeArquivos);
        })
        //console.log(arquivos);
    }
}

processaTexto(caminho) // passa o terceiro item de caminho