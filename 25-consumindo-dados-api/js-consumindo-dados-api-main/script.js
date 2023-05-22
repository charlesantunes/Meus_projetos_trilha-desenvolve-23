// Esses códigos seram comentados e melhorado a baixo
/*
//promisse = promessa, ou sejá, foi feita uma requisição para api e temos resposta uma promessa que pode ser que chegue(resolve) ou não(reject) o conteudo da pesquisa, logo temos o metodo: Promisse(function(resolve,reject){}).
const consultaCep = fetch('https://viacep.com.br/ws/01001000/json/').then(
    resposta => resposta.json() //then() = funciona como "Então", então acontece algo, no caso vamos usar uma arrow function para varrer todo o json() e entegar um objeto com os valores.
    ).then(  //P/ verificar apenas os valores do json(), vamos fazer outro then() p/ ir uma camada a mais.
        item => {
            if (item.erro) { // esse obj erro está na api
                throw Error('Esse cep não existe!') // esse é um erro de pesquisa, troque o cep para teste.  
            } else {
                console.log(item)   
            }
        }
    ).catch(
        erro => console.log(erro) // catch é o tratamento de erro, tire um zero da url para testar.
    ).finally(msg => console.log("Processo finalizado com sucesso")); //msg independente se tem ou não erro.
console.log(consultaCep);   
*/

/* códigos de erros do catch
1XX: Informativo – a solicitação foi aceita ou está em andamento;
2XX: Confirmação – a solicitação foi concluída ou entendida;
3XX: Redirecionamento – faltou alguma coisa na solicitação;
4XX: Erro do cliente – houve um erro na solicitação;
5XX: Erro no servidor – houve uma falha no servidor durante a solicitação.
*/

/*
um extra de outras aulas sobre como charmar função na hora que declara, ou seja, cria e ela se chama na mesma hora. Repare que para isso, precisa envolver entre parenteses e no final abrir e fechar um parentese, isso é uma boa prática para poder repetir as variaveis const em toda as páginas do projeto.


//função simples
(function nameFunction(params) {    
})()

//função Arrow function
(() => {
})()

*/


//Código limpo =======================================

async function buscaEndereco(cep) { //parametro para receber a solicitação do cep
    let msgErro = document.querySelector("#erro");
    msgErro.innerHTML = "";
    try {
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`) // await = aguardando uma resposta da api e só funciona em funções assíncronas usando esse termo já mostra diretamente o json, fica mais legível o código.
        let consultaCepConvertida = await consultaCep.json();
        //console.log(consultaCep); // vem com obj response e todos seus metodos e o cep desejado
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente!')
        }
        /**
         * 
        */
        let endereco = document.querySelector('#endereco')
        let bairro = document.querySelector('#bairro')
        let cidade = document.querySelector('#cidade')
        let estado = document.querySelector('#estado')
        
        endereco.value = consultaCepConvertida.logradouro
        bairro.value = consultaCepConvertida.bairro
        cidade.value = consultaCepConvertida.localidade
        estado.value = consultaCepConvertida.uf

        console.log(consultaCepConvertida); // mais limpa ainda, só as informações do cep do obj
        return consultaCepConvertida;
    } catch (error) {
        msgErro.innerHTML = `<p>CEP inválido, tente novamente!</p>`
        console.log(error);       
    }
    
   
}
let cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value)) // focusout é quando selecionado o campo de digitação e depois clicado fora ele faz a ação.

/*Exemplo de chamadas de vários ceps
//simular a chamada de vários ceps
let ceps = ['66613080','62850000']
let todosCeps = ceps.map(item => buscaEndereco(item))
console.log(todosCeps) // repare que ainda estão taxados como promessas, precisa ser concluida.

Promise.all(todosCeps).then(item => console.log(item)) // agora não é mais promessa, foi resolvida
*/
