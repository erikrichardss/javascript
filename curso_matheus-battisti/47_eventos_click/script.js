// inserir click
var btn = document.querySelector('#btn')

btn.addEventListener('click', function() {

    console.log('Clicou')

    console.log(this)

    this.style.color = 'red'
})

// CLick afetando outros elementos
var title = document.querySelector('#title')

title.addEventListener('click', function() {

    var subtitle = document.querySelector('#subTitle')

    subtitle.style.display = 'none'
})

// double click
var subtitle = document.querySelector('#subTitle')

subtitle.addEventListener('dblclick', function() {

    subtitle.textContent = 'Alterei o sibtitulo'

})