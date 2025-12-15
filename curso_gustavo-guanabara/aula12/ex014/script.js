function carregar() {
    var msg = window.document.querySelector("#msg")
    var img = window.document.querySelector("#foto")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas. <br>` 

    if (hora >=0 && hora < 12) {
        img.src = 'picture/manha.png'
        msg.innerHTML += "Bom dia!"
        document.body.style.background = '#60B8F7'
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'picture/tarde.png'
        msg.innerHTML += "Boa tarde!"
        document.body.style.background = '#B94F0E'
    }else {
        img.src = 'picture/noite.png'
        msg.innerHTML += "Boa noite!"
        document.body.style.background = '#0E1831'
    }
}