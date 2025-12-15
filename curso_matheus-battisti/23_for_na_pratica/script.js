var lista = ['Laranja', 'Maçã', 'Banana', 'Jaca', 'Pêra']

var listaUl = window.document.createElement('ul')

var body = window.document.getElementsByTagName('body')

console.log(body[0])

body[0].appendChild(listaUl)

var listaNoBody = window.document.getElementsByTagName('ul')

console.log(listaNoBody[0])

for(var i = 0; i < lista.length; i++) {
    var lifor = window.document.createElement('li')
    var textoli = window.document.createTextNode(lista[i])

    lifor.appendChild(textoli)

    console.log(lista[i])

    listaNoBody[0].appendChild(lifor)
}




var listaDois = ['Arroz', 'Feijão', 'Amendoim']

var listaUlDois = window.document.createElement('ul')

var bodyDois = window.document.getElementsByTagName('body')

console.log(bodyDois[0]) 

var listaNoBodyDois = window.document.getElementsByTagName('ul')

console.log(listaNoBodyDois)

for(var a = 0; a < listaDois.length; a++) {
    var liforDois = window.document.createElement('li')
    var textoliDois = window.document.createTextNode(listaDois[a])

    liforDois.appendChild(textoliDois)

    console.log(listaDois[i])

    listaNoBodyDois[0].appendChild(liforDois)
}



var listaTres = ['Água', 'Suco']

var listaulTres = window.document.createElement('ul')

var bodyTres = window.document.getElementsByTagName('body')

console.log(bodyTres[0])

var listaNoBodyTres = window.document.getElementsByTagName('ul')

for(var b = 0; b < listaTres.length; b++) {

    var liforTres = window.document.createElement('li')

    var textoliTres = window.document.createTextNode(listaTres[b])

    liforTres.appendChild(textoliTres)

    console.log(listaTres[b])

    listaNoBodyTres[0].appendChild(liforTres)
}
