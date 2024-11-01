const miniaturas = document.querySelectorAll('.miniatura');
const imgApliada = document.querySelector('#imgAmpliada');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click',() => {
        miniaturas.forEach(miniatura => {
            miniatura.style.opacity = '0.4'
        })
        miniatura.style.opacity = "1";
        imgApliada.src = miniatura.src;
        imgApliada.style.display = 'block';
    })
})