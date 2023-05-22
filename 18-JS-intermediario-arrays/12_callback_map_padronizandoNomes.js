//Padronize os nomes em tudo maiusculos para enviar para o banco de dados.

const nomes = ['Charles','Michele','Ana Liz'];

//Usando map() com console log junto, exibe em coluna.
const nomesPadronizados = nomes.map(item => console.log(item.toUpperCase()));

//Usando map() com console log fora, exibe em linha
const nomesPadronizados2 = nomes.map(item => item.toUpperCase());
console.log(nomesPadronizados2)
