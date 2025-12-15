//  parseFloat 10.0

console.log(parseFloat('12.999'))
console.log(Number.parseFloat('12.999'))
// O parseFloat converte um número em um número flutuante

console.log(parseInt('10'))
console.log(parseInt(16.96))
// O parseInt converte o número para inteiro

console.log(23.975635832.toFixed(1))
// O toFixed me da a possibilidade de arredondar um número

console.log(isNaN('Teste'))
console.log(isNaN(12))
console.log(isNaN('12'))
// O isNaN retorna todo tipo de número para false, mesmo estando intendificado como uma string

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
