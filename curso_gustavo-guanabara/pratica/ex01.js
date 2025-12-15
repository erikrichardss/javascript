let consol = [4, 7, 9, 3, 2, 5]
consol.sort()

let pos = consol.indexOf(7)

if (pos == -1) {
    console.log('o número informado não existe!')
} else {
    console.log(`O valor está na posição ${pos}`)
}