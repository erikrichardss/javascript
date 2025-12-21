let pessoa = {
    nome: 'Erik',
    idade: 29,
    falar: function() {
        console.log('Olá, tudo bem?')
    },
    soma: function(a, b) {
        return a + b
    }
}

console.log(pessoa.nome)

console.log(pessoa.idade)

pessoa.falar()

var soma = pessoa.soma(2, 2)

console.log(soma)

let carro = {
    marca: 'fiat',
    ano: 2025,
    cavalos: '80 cavalos',
    preco: function() {
        console.log('Preço: R$ 70.000,00')
    }
}

console.log(carro.marca, carro.ano, carro.cavalos)
carro.preco()

let comida = {
    alimento: ['arroz, feijão, lentilha, soja'],
    frutas: ['banana', 'maçã', 'laranja', 'tomate'],
    frase: function() {
        console.log('è muito bom ser saudavel!')
    },
}

console.log(comida.frutas.join(', '))
console.log(comida.frutas.join(', '))
comida.frase()

let calculos = {
    calculo: function(a, b, c, d, e) {
        return a + b - c * d / e
    }
}

let calculo = calculos.calculo(5, 18, 45, 90, 3) 

console.log(calculo)