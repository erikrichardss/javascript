/* toLowercase e toUpperCase */

var frase = 'Está é a frase que vamos manipular'

var fraseCaixaAlta = frase.toUpperCase()

console.log(frase)
console.log(fraseCaixaAlta)

var fraseCaixaMinuscula = frase.toLowerCase()

console.log(fraseCaixaMinuscula)


var lindo = 'Meus cachorros são muito lindos'

lindo = lindo.toUpperCase()

var lindoDois = lindo.toLowerCase()

console.log(lindo)
console.log(lindoDois)

/* Trim */

var nome = '   Erik   '
var nomeTrim = nome.trim()

console.log(nome)
console.log(nomeTrim)


let tecnologia = '   I working in the place of the T.I    '

console.log(tecnologia)
console.log(tecnologia.trim())

/* Split */

console.log(frase.split(' '))

var tags = 'PHP, JavaScript, HTML, CSS'

console.log(tags.split(','))


console.log(tecnologia.trim().split(','))

/* lastIndexOf */

var fraseDois = 'Eu quero a ultima palavra teste desse teste'

console.log(fraseDois.indexOf('teste'))
console.log(fraseDois.lastIndexOf('teste'))

