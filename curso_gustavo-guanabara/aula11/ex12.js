var horas = new Date()
var hora = horas.getHours()

console.log(`Agora são ${hora} horas`)

if (hora < 6) {
    console.log('Boa madrugada!')
}
else if (hora >= 6 && horas < 12) {
    console.log('Bom dia!')
}
else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite')
}