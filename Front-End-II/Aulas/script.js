const txt = document.querySelector('#txt');
const cardimg = document.querySelector('.cardimg');

function card() {
    cardimg.style.border = '2px solid black';
}

cardimg.addEventListener('click', card)
txt.onclick = () => {
    alert('Campo de texto clicado!');
}

const clicked = () => {
    console.log('Botão clicado!');
}

txt.addEventListener('keypress', () => {
    alert('Tecla acionada!');
})

cardimg.addEventListener('mouseover', () => {
    cardimg.style.opacity = '0.5';
})

cardimg.addEventListener('mouseout', () => {
    cardimg.style.opacity = '1';
})