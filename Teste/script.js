const titulo = document.querySelector('h1');
titulo.remove();


// console.log(titulo.innerHTML)
// console.log(titulo.innerText)
// console.log(titulo.textContent)

const body  = document.querySelector('body');
const ancora = document.createElement('a');
ancora.text = 'Meu link';
ancora.setAttribute('href','https://www.ifro.edu.br');
ancora.setAttribute('target','_blank');
ancora.style.fontSize = '15px';
ancora.style.color = 'Green';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';
body.prepend(ancora);