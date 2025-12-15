/* length 
    mostra a quantidde de itens que tem dentro de uma váriavel 
*/
var arr = [1, 2, 3, 4, 5]

console.log(arr.length)


/* push 
    adiciona um number ou uma string no final do array
*/
arr.push(6)
arr.push('qualquer coisa')

console.log(arr)


/* pop 
    remove o elemento no fim do array
*/
arr.pop()

console.log(arr)


/* unshift
    adiciona um elemento no começo do array
*/
arr.unshift(0)
arr.unshift('teste')

console.log(arr)


/* shift 
    ele remove no inicio do array
*/
arr.shift()

console.log(arr)


/* acessar o último elemento do array */
console.log(arr[arr.length - 1])

/* isArray

*/
console.log(Array.isArray(5))
console.log(Array.isArray(arr))
