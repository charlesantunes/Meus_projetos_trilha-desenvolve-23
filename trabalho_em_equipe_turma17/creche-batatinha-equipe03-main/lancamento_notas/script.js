//Mês e ano
const dt = new Date();
const mes = dt.getMonth();  //usei como indice do Array
const ano = dt.getFullYear();

const nomeMes = new Array('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro')

document.querySelector('.data p').innerHTML = `${nomeMes[mes]} / ${ano}`


//Seleção e marcação das patas
document.addEventListener('click', function (e) {
    const nomeClasse = e.target.classList[0] //peguei a primeira classe da lista pelo click do mouse

    const patas = document.querySelectorAll(`.patas${nomeClasse} li`)

    patas.forEach((element,indice1)=>{
        element.addEventListener('click',()=>{
            patas.forEach((element,indice2)=>{
                indice1 >= indice2 ? element.classList.add("active") : element.classList.remove("active")
            })
        })
    })
   // console.log(e.target.getAttribute('data-avaliacao')) // avaliação p/ banco de dados
})



// pegando todos os dados do localStorage
const gatosSalvos = JSON.parse(localStorage.getItem("cadastroGato"));
console.log(gatosSalvos)

//variaveis para comunicar com o html
const fotoAvata = document.querySelector("#avata");
const nomeAvata = document.querySelector("h1");
const valorSocializacao = document.querySelectorAll("[data-socialicacao]")
const valorSoneca = document.querySelectorAll("[data-soneca]")
const valorAlimentacao = document.querySelectorAll("[data-alimentacao]")
const valorBrincadeiras = document.querySelectorAll("[data-brincadeiras]")
const valorPreguicinha = document.querySelectorAll("[data-preguicinha]")
const valorFotos = document.querySelectorAll("[data-fotos]")

const salvar = document.querySelector("[data-botao]")


//colocando os dados do storage no html
fotoAvata.setAttribute("src", gatosSalvos.foto); 
nomeAvata.textContent = gatosSalvos.nomeGato;
valorSocializacao.textContent = gatosSalvos.socializacao;
valorSoneca.textContent = gatosSalvos.soneca;
valorAlimentacao.textContent = gatosSalvos.alimentacao;
valorBrincadeiras.textContent = gatosSalvos.brincadeiras;
valorPreguicinha.textContent = gatosSalvos.preguicinha;
valorFotos.textContent = gatosSalvos.avaliacaoFotos;


//pegando as avaliações/notas das patas com o click e target
document.addEventListener('click',function (element) {
//não conseguir armazenar as let    
let socializacao;
let soneca;
let alimentacao;
let brincadeiras;
let preguicinha;
let avaliacaoFotos;

socializacao =  element.target.getAttribute('data-socialicacao')
soneca =  element.target.getAttribute('data-soneca')
alimentacao =  element.target.getAttribute('data-alimentacao')
brincadeiras =  element.target.getAttribute('data-brincadeiras')
preguicinha =  element.target.getAttribute('data-preguicinha')
avaliacaoFotos =  element.target.getAttribute('data-fotos')


//enviar para o localStorage as avaliações das patas.
salvar.addEventListener('click',(event)=> {
  event.preventDefault();
  const cadastroGato = {
    nomeGato: gatosSalvos.nomeGato,
    nomeDona: gatosSalvos.nomeDona,
    foto: gatosSalvos.foto,
    socializacao:socializacao,
    soneca:soneca,
    alimentacao:alimentacao,
    brincadeiras:brincadeiras,
    preguicinha:preguicinha,
    avaliacaoFotos:avaliacaoFotos,
  }

// Salvando o objeto no cache do navegador
  localStorage.setItem('cadastroGato', JSON.stringify(cadastroGato));
  window.location.href = "index.html";
})

})







//===============tenta recuperar a nota/avaliação dos animais==============
/*
document.addEventListener('click',function (element) {
    const socializacao =  element.target.getAttribute('data-socialicacao')
    const soneca =  element.target.getAttribute('data-soneca')
    const alimentacao =  element.target.getAttribute('data-alimentacao')
    const brincadeiras =  element.target.getAttribute('data-brincadeiras')
    const preguicinha =  element.target.getAttribute('data-preguicinha')
    const fotos =  element.target.getAttribute('data-fotos')
    // console.log(socializacao)
    // console.log(soneca)
    // console.log(alimentacao)
    // console.log(brincadeiras)
    // console.log(preguicinha)
    // console.log(fotos)
    const enviar = document.querySelector('[data-botao]')
    
    enviar.addEventListener('click',function (){
        event.preventDefault();
        let cadastroGato={};
        cadastroGato.socializacao = socializacao;
        cadastroGato.soneca = soneca;
        cadastroGato.alimentacao = alimentacao;
        cadastroGato.brincadeiras = brincadeiras;
        cadastroGato.preguicinha = preguicinha;
        cadastroGato.fotos = fotos;
        
        localStorage.setItem('cadastroGato', JSON.stringify(cadastroGato));
        console.log(cadastroGato.socializacao)
    })
})
  
//const socializacao = document.querySelectorAll(".patasSocialicacao [data-avaliacao]")
//console.log(socializacao)
 */
//=====================================================

/*
//enviar nota para local storage
// Seleciona os elementos do formulário
const nomeGatoInput = document.getElementById('nome-gato');
const nomeDonaInput = document.getElementById('nome-dona');
const btn2 = document.getElementById('btn2');

// Adiciona um evento de clique ao botão
btn2.addEventListener('click', function () {
    event.preventDefault();// Adiciona o evento preventDefault() para impedir o redirecionamento
    // Cria um objeto com os valores dos campos de entrada
    const cadastroGato = {
        nomeGato: nomeGatoInput.value,
        nomeDona: nomeDonaInput.value,
        foto: localStorage.getItem('previewImage')
    }
    
    // Salva o objeto no cache do navegador
    localStorage.setItem('cadastroGato', JSON.stringify(cadastroGato));
    console.log(cadastroGato)
});


*/
/*

gatosSalvos.forEach((avata)=>{
    const fotoAvata = document.querySelector("#avata");
    const nomeAvata = document.querySelector("h1");
    
    nomeAvata.textContent = avata.nomeGato;
    fotoAvata.setAttribute("src", avata.foto);    
})
*/
/* 
const fotoAvata = document.querySelector("#avata");
const nomeAvata = document.querySelector("h1");
for (let i = 0; i < gatosSalvos.length; i++) {
    
    nomeAvata.textContent = gatosSalvos[1].nomeGato;
    fotoAvata.setAttribute("src", gatosSalvos[1].foto);
    console.log(nomeAvata)
    console.log(fotoAvata)
}
*/
