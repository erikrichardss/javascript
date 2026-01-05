// criar elemento
var el = document.createElement('div')

el.classList = 'div-criada'

console.log(el)

var container = document.querySelector('#container')

// inserBefore - insere antes
var el2 = document.createElement('div')

el2.classList = 'div-before'

var el3 = document.querySelector('#container .div-criada')

console.log(el3)

/* elemento pai como referência principal -> o elemento que você quer inserir -> elemento que você quer inserir antes*/
container.insertBefore(el2, el3)
