let btnMenu = document.querySelector('.icone-menu');
let nav = document.querySelector('.nav');

function handleButtonClick(){
    nav.classList.toggle("active");
}
btnMenu.addEventListener("click",handleButtonClick);

