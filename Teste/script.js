const titulo = document.querySelector('h1');

// console.log(titulo.innerHTML)
// console.log(titulo.innerText)
// console.log(titulo.textContent)

const body  = document.querySelector('body');
const ancora = document.createElement('a');
const texto = document.createElement('textarea')

ancora.text = 'Meu link';
ancora.setAttribute('href','https://www.ifro.edu.br');
ancora.setAttribute('target','_blank');
ancora.style.fontSize = '15px';
ancora.style.color = 'Green';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';
ancora.style.fontFamily = 'cursive';
ancora.style.justifyContent = 'center';
ancora.style.display = 'flex';
ancora.style.alignSelf = 'center';
body.prepend(ancora);
// texto.text = 'Meu primeiro Texto';
// texto.querySelector('h1');
// body.appendChild(texto);
// texto.style.fontFamily = 'Verdana';
// texto.style.fontWeight = 'bold';
// console.log(texto.innerText);
// console.log