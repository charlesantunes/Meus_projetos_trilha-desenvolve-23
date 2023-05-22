/*
Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos seguro social e cpf no formato string. Além disso, quando forem exibidas as informações das pessoas em um relatório, deverão aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade. 
*/

const pessoa = {
   nome:"Bruce Banner",
   dataNascimento:"25/01/1980",
   carteiraIdentidade:"997776-X",
   email:"profbanner@email.com",
   telefone:"+552877776666",
   cidade:"Cachoeiro de Itapemirim",
   estado:"ES"
}

pessoa.seguroSocial = '5155151';
pessoa.cpf = '12345678920';


console.log(pessoa);

console.log(pessoa.cpf.substring(0,3));

