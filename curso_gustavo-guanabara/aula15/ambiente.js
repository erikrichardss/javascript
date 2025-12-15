let num = [5, 9, 6, 4, 3, 7]
num.push(1)
num.sort()
console.log(num)
console.log(`Noso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log('O vetor não foi encontrado')
} else {
    console.log(`O vetor 6 está na posição ${pos}`)
}






/*
num [3] = 6
num.push(7)
num.push(2)
num.length
num.sort()
*/ 