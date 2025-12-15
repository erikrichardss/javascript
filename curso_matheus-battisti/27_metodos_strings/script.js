/* Length */

var nome = 'Erik'

console.log(nome.length)

var obj = 'bolada'

console.log(obj.length)

var animal = 'Cachorro'

console.log(animal.length)

/* IndexOf */

console.log(nome[1])
console.log(obj[3])
console.log(animal[3])

var frase = 'O rato roeu a roupa do rei de Roma'

console.log(frase.indexOf('roeu'))
console.log(frase.indexOf('rei'))
console.log(frase.indexOf('rato'))

/* Slice */

var roeu = frase.slice(7, 11)

console.log(roeu)

var palavra = frase.slice(23, 26)

console.log(palavra)

/* Replace */

var novaFrase = frase.replace('roeu', 'usou')

console.log(novaFrase)

var fraseDois = ' O bispo de constantinopla'

var fraseDoisModificada = fraseDois.replace('constantinopla', 'jerusalem')

console.log(fraseDoisModificada)


var fraseN = 'Somos todos irmãos'

var fraseM = fraseN.replace('irmãos', 'inimigos')

console.log(fraseM)