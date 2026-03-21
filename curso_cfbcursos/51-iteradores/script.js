const valores = [1, 2, 3, 4, 5, 6]
const interatorValores = valores[Symbol.iterator]()

const texto = "Youtube"
const interatorTexto = texto[Symbol.iterator]()

console.log(valores)
console.log(interatorValores.next())
console.log(interatorValores.next())
console.log(interatorValores.next())
console.log(interatorValores.next())
console.log(interatorValores.next())
console.log(interatorValores.next())
console.log(interatorValores.next())

console.log(texto)
console.log(interatorTexto.next())
console.log(interatorTexto.next())
console.log(interatorTexto.next())
console.log(interatorTexto.next())
console.log(interatorTexto.next())
console.log(interatorTexto.next())
console.log(interatorTexto.next())
console.log(interatorTexto.next())

// Array
// Strings
