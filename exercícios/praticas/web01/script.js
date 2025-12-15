var ano = window.document.querySelector('#txtano')
var masc = window.document.querySelector('#sexo1')
var fem = window.document.querySelector('#sexo2')
var ver = window.document.querySelector('.botao')
var res = window.document.querySelector('#res')

function Verificar() {
    let ano = Number(ano.value)
    let iano = new Date().getFullYear

    if (ano == 0 || ano > iano) {
        res.innerHTML = 'Verifique os dados e tente novamente'
    }
    else {
        window.alert('tudo ok')
    }
}