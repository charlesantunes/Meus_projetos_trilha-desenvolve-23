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

 // Verifica se o objeto já existe no localStorage
const storedCadastroGato = localStorage.getItem('cadastroGato');
if (storedCadastroGato !== null) {
  const parsedCadastroGato = JSON.parse(storedCadastroGato);
  if (parsedCadastroGato.nomeGato === cadastroGato.nomeGato 
      && parsedCadastroGato.nomeDona === cadastroGato.nomeDona ) {
    // Exibe um alerta informando que o gato já foi cadastrado
    alert('Erro: o gato já foi cadastrado.');
    return;
  }
}

// Salva o objeto no cache do navegador
localStorage.setItem('cadastroGato', JSON.stringify(cadastroGato));
console.log(cadastroGato);

// Exibe um alerta informando que o gato foi salvo com sucesso
alert('Gato salvo com sucesso!');


});