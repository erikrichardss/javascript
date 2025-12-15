function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#txtano")
    var res = document.querySelector("#res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados novamente!")
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        if (fsex[0].checked){
            genero = 'homem'
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/bebê-m.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'image/jovem-m.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'image/adulto-m.jpg')
            }
            else {
                img.setAttribute('src', 'image/idoso-m.jpg')
            }
        }
         else if (fsex[1].checked) {
            genero = 'Mulher'
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'image/bebê-f.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'image/jovem-f.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'image/adulto-f.jpg')
            }
            else {
                img.setAttribute('src', 'image/idoso-f.jpg')
            }
         }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}