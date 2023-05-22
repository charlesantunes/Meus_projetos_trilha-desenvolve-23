const miausCadastrados = document.querySelector(".miaus-cadastrados");

// Buscando gatos no localStorage
const cadastroGato = JSON.parse(localStorage.getItem("cadastroGato"));
const foto = cadastroGato.foto;
const nomeGato = cadastroGato.nomeGato;

const novoItemLista = document.createElement("li");
const imagemGato = document.createElement("img");
const nomeGatoEl = document.createElement("span");
const botaoLancarNotas = document.createElement("button");

imagemGato.setAttribute("src", foto);
nomeGatoEl.textContent = nomeGato;

botaoLancarNotas.textContent = "Lançar Notas";

novoItemLista.appendChild(imagemGato);
novoItemLista.appendChild(nomeGatoEl);
novoItemLista.appendChild(botaoLancarNotas);
miausCadastrados.appendChild(novoItemLista);

botaoLancarNotas.addEventListener("click", () => {
    window.location.href = "../lancamento_notas/index.html";
});
