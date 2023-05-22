let campoTel = document.querySelector('input[type=tel]');
let num = document.querySelectorAll('input[type=button]');

for (i = 0; i < num.length; i++) {
  const numeros = num[i];
  
  numeros.onclick = function (){ campoTel.value =  campoTel.value + numeros.value}
}
