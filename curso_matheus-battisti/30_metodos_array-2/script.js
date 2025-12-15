/* splice
    tanto adiciona um elemento no meio do array, como te permite deletar um elemento especifico
*/
var arr = [1, 2, 3, 4, 5]

arr.splice(3, 0, 9876)

console.log(arr)

arr.splice(2, 1)

console.log(arr)

/* indexOf
    você consegue identificar qual a posição do array usando indexOf
*/
console.log(arr.indexOf(9876))


/* join
    você pode transformar um array em uma frase, ou simplesmente tirar ela como característica o separamento entre aspas
*/
var arr2 = ['o', 'rato', 'roeu', 'a', 'roupa']

console.log(arr2.join(' '))

/* reverse
    ele inverte a ordem de tras para frente dos elementos que estão dentro do array
*/
console.log(arr2.reverse())