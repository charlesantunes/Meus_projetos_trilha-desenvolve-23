document.addEventListener("DOMContentLoaded", function() {
    const nomeGatoInput = document.getElementById('nome-gato');
    const nomeDonaInput = document.getElementById('nome-dona');
    const btn2 = document.getElementById('btn2');

    function checkInputs() {
  if (nomeGatoInput.value && nomeDonaInput.value) {
    btn2.classList.add('btn-preenchido');
  } else {
    btn2.classList.remove('btn-preenchido');
  }
}

nomeGatoInput.addEventListener('input', checkInputs);
nomeDonaInput.addEventListener('input', checkInputs);
  });