
//const dataNascimento = document.querySelector("#nascimento"); // substituida pela date-attribute

//====================== Validação da consulta, usando data-attribute
//função que chama o inputa a ser tratado
export function valida(input) {
    const tipoDeInput = input.dataset.tipo //indicando qual data-attribute estamos buscando, no caso data-tipo.
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    //validity.valid verifica se o campo tem as escritas válidas ou se tem alguma coisa escrita.
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido') //se tiver certo o campo, remove a classe
        
        //Vamos usar a tag spam para chamar o obj de erro.
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''; //se o campo estiver corretamente preenchido, então o campo de erro sera vazio.
    }else{
        input.parentElement.classList.add('input-container--invalido') //se tiver algo errado no campo, add a classe. 

        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput,input); //se o campo estiver preenchido errado, então será chamado o obj mensagensDeErro.
    }
}
//======================== campo de msg de erro(não funcionou) =================================================
//abaixo um array para fazer o laço de repetição e comparar qual o tipo de erro está sendo executado, array será chamaddo na função mostraMensagemDeErro().
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

//além da compro de erro acima, podemos mostrar qualquer msg, dependendo do erro.
const mensagensDeErro = { // obj contendo todas a messagens de erro
    nome:{
        valueMissing:'O campo nome não pode estar vazio.'
    },
    email:{
        valueMissing:'O campo email não pode estar vazio.',
        typeMismatch:'O email digitado não é válido'
    },
    senha:{
        valueMissing:'O campo senha não pode estar vazio.',
        patternMismatch:'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.'
    },
    dataNascimento:{
        valueMissing:'O campo Data de Nascimento não pode estar vazio.',
        customError:'Você deve ser maior de 18 anos para se cadastrar.'
    },
    cpf:{
        valueMissing:'O campo CPF não pode estar vazio.',
        customError:'O CPF digitado não é válido.'
    },
    cep:{
        valueMissing:'O campo cep não pode estar vazio.',
        patternMismatch:'O CEP digitado não é válido.',
        customError:'Não foi possível buscar o CEP.'
    },
    logradouro:{
        valueMissing:'O campo logradouro não pode estar vazio.'
    },
    cidade:{
        valueMissing:'O campo cidade não pode estar vazio.'
    },
    estado:{
        valueMissing:'O campo estado não pode estar vazio.'
    },
    preco:{
        valueMissing: 'O campo preço não pode estar vazio.'
    }

}
/*obs: pesquisar as funções abaixo para que servem esses erros:
badInput:false
customError:false
patternMismatch:false
rangeOverflow:false
rangeUnderflow:false
stepMismatch:false
tooLong:false
tooShort:false
typeMismatch:false
valid:true
valueMissing:false
*/

//============================== fim do campo erro ======================================

//separando os inputs
const validadores = {
    dataNascimento:input => validaDataNascimento(input),
    cpf: input => validaCPF(input), //incicio da chamada para validar o cpf
    cep: input => recuperarCEP(input) //incicio da chamada para entrada da API do CEP
};

function mostraMensagemDeErro(tipoDeInput,input) {
    let mensagem= '';
    tiposDeErro.forEach(erro => { 
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }    
    })

    return mensagem
}





//================ verificação se é maior de 18 anos =============
/*substituida pela data-attribute e função 
dataNascimento.addEventListener("blur", (event)=>{
    validaDataNascimento(event.target)

})
*/

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    //console.log(typeof(dataRecebida)) //confirmar que é objeto
    let msg = '';
   
    if (!maiorQue18(dataRecebida)) {
        msg = 'infelizmente infelizmente você é de menor, pois nasceu em '+dataRecebida.getFullYear()+' apenas maiores de idade podem realizar o cadastro'
    }

    input.setCustomValidity(msg);
}

function maiorQue18(objDataRecebida) { // recebe o objeto dataRecebida como parametro
    const dataAtual = new Date(); // adiciona ao obj 2023 04 20
    const dataMais18 = new Date(objDataRecebida.getUTCFullYear() + 18, objDataRecebida.getUTCMonth(),objDataRecebida.getUTCDate()); // adiciona ao obj 'ano informado somado com 18, no caso 2041'/04/20

    return dataMais18 <= dataAtual //retorna true ou false
}
//================ FIM da verificação se é maior de 18 anos =============

//================================ tratamento do cpf ===============================
//objetivo dessa função é tirar todos os pontos e traços cpf e deixar só os números.
function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g,''); // replace() = traca alguma caracter por outro, no caso foi usado uma regex /\D/g que pega tudo que não número e atribui vazio no lugar.

    let mensagem = '';

    if (!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)){
        mensagem = 'O CPF digitado não é válido.'
    }

    input.setCustomValidity(mensagem);
}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido = true;

    valoresRepetidos.forEach(valor =>{
        if (valor == cpf) {
            cpfValido = false;
        }
    })

    return cpfValido;
}

//===================cálculo para saber se o cpf é válido======================
function checaEstruturaCPF(cpf) {
    const multiplicador = 10

    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
    if(multiplicador >= 12) {
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++
    }

    if(digitoVerificador == confirmaDigito(soma)) {
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false
}

function confirmaDigito(soma) {
    return 11 - (soma % 11)
}
//===================FIM cálculo para saber se o cpf é válido======================
//================================ FIM do tratamento do cpf ===============================

//================================ tratamento do CEP ===============================

function recuperarCEP(input) {
    const cep = input.value.replace(/\D/g,'') // replace(/\D/g,'') => substitui tudo que não for número por nada''.
    
    //tratando a cominicação com a API
    const url = `https://viacep.com.br/ws/${cep}/json/` //API consultada e ${cep} que vamos informar para pesquisar
    const options = {
        method: 'GET', //oq vamos fazer na api, apenas consultar
        mode: 'cors', // modo de pesquisa.
        headers: {
            'content-type': 'application/json;charset=utf-8 '   //resposta da API, json;charset=utf-8 gante que a resposta vem no padrão utf-8
        }
    }

    //realizando a pesquisa
    if (!input.validity.patternMismatch && !input.validity.valueMissing) { //a pesquisa só acontece se não for chamado os erros do obj mensagensDeErro, ou sejá, for falso.
        fetch(url,options).then(
            response => response.json()
        ).then(
            data => {
                //console.log(data)     //verificar se está funcionando
                if (data.erro) {
                    input.setCustomValidity('Não foi possível buscar o CEP.')
                    return
                }
                input.setCustomValidity('')
                preencheCamposComCEP(data)
                return
            }
        )
    }
}

function  preencheCamposComCEP(data) {
    const logradouro = document.querySelector('[data-tipo="logradouro"]')
    const cidade = document.querySelector('[data-tipo="cidade"]')
    const estado = document.querySelector('[data-tipo="estado"]')

    logradouro.value = data.logradouro;
    cidade.value = data.localidade;
    estado.value = data.uf
}
//================================ FIM tratamento do CEP =============================