// evento de mouseouver

var title = document.querySelector('#title')
var body = document.querySelector('body')

var pr = document.createElement('p')

pr.classList.add('hide', 'legenda')
pr.appendChild(document.createTextNode('Contém um texto!'))
body.appendChild(pr)


title.addEventListener('mouseover', function() {

    this.style.backgroundColor = 'yellow'

})

// evento de mouseout
title.addEventListener('mouseout', function() {

    this.style.backgroundColor = 'white'

})

// afetar outro elemento com mouseover
var subtitle = document.querySelector('#subTitle')

subtitle.addEventListener('mouseover', function() {

    var legenda = document.querySelector('.legenda')

    legenda.classList.remove('hide')
})

subtitle.addEventListener('mouseout', function() {

    var legenda = document.querySelector('.legenda')

    legenda.classList.add('hide')
})