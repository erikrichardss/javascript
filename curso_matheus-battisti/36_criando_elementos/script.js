/* 
    createElemente te da a possibilidade de criar uma tag no seu html
    createTexteNode cria o texto que você quer
    appendChild adiciona esse texto no html
*/

// inserir o elemento no body
var novoParagrafo = document.createElement('p')
var texto = document.createTextNode('Este é o conteúdo do parágrafo.')
var corpo = document.querySelector('body')

novoParagrafo.appendChild(texto)

corpo.appendChild(novoParagrafo)

// inserir um container

var container = document.getElementById('container')

console.log(container)

var el = document.createElement('span')

el.appendChild(document.createTextNode('Texto do span'))

container.appendChild(el)


// pratica
var nome = document.createElement('p')

nome.appendChild(document.createTextNode('Erik'))

corpo.appendChild(nome)


var add = document.createElement('h3')
var textoPratica = document.createTextNode('Adicionei esse subtítulo')

add.appendChild(textoPratica)
corpo.appendChild(add)


const js = document.createElement('div')

js.appendChild(document.createTextNode('O JavaScript está ficando complicado!'))
corpo.appendChild(js)