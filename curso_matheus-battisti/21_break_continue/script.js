for(var i = 10; i > 0; i--) {
    console.log(i)

    if(i === 5) {
        break
    }
}

console.log('Deu o break!')

for(let a = 1; a <= 10; a++) {
    console.log(a)

    if(a === 5) {
        break
    }
}

console.log('Deu o break novamente!')

var x = 10

while(x < 100) {
    x += 10
    
    if(x === 60 || x === 90) {
        console.log('CONTINUE')
        continue
    }

        console.log('Testando continue ' + x)
}

for(let a = 20; a <= 200; a += 20) {

    if(a === 40 || a === 80 || a === 120 || a === 160) {
        console.log('CONTINUE')
        continue
    }

    console.log('Contando ' + a)
}

for(let a = 2; a <= 20; a *= 2) {

    if(a === 8) {
        console.log('CONTINUE')
        continue
    }

    console.log(a)
}

for(let a = 20; a >= 0; a--) {

    if(a === 10) {
        console.log('BREAK')
        break
    }

    console.log(a)
}

