var idade = 16
var nome = ' Erik'

if(nome === 'Erik' && idade === 16) {
    console.log('O erik pode entrar na aula de esgrima!')
} else {
    console.log('Este não é o Erik')
}

if(1 === 1 && 3 > 2 && true) {
    console.log('Passou')
}

if((1 === 1 & 3 > 2) && true) {
    console.log('Passou 2')
} else if(nome === 'Erik' && idade >= 14) {
    console.log('Aqui passa!')
}