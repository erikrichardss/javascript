function carregar() {
    var est = window.document.querySelector('#estacoes')
    var foto = window.document.querySelector('#imagem')
    var data = new Date()
    var mes = data.getMonth()

    if (mes == 11 || mes <= 2) {
        est.innerHTML = 'É Verão!'
        foto.src = 'picture/verao.jpg'
    } else if (mes >= 2 && mes < 5) {
        est.innerHTML = 'É Outono!'
        foto.src = 'picture/outono.jpg'
    } else if (mes >= 5 && mes < 8) {
        est.innerHTML = 'É Inverno!'
        foto.src = 'picture/inverno.jpg'
    } else if (mes >= 7 && mes < 11) {
        est.innerHTML = 'É Primavera!'
        foto.src = 'picture/primavera.jpg'
    } else {
        est.innerHTML = 'Esse mês não existe!'
    }
} 