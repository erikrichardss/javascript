const calcular = document.querySelector('#calcular')


function imc() {
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const resultado = document.querySelector('#resultado')

    if(nome.value !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let claasificacao = ''

        if(valorIMC < 18.5) {
            claasificacao = 'abaixo do peso.'
        } else if(valorIMC < 25) {
            claasificacao = 'com peso ideal. Parabéns!!!'
        } else if(valorIMC < 30) {
            claasificacao = 'levemente acima do peso.'
        } else if(valorIMC < 35) {
            claasificacao = 'com obesidade grau I'
        } else if(valorIMC < 40) {
            claasificacao = 'com obesidade grau II'
        } else {
            claasificacao = 'com obesidade grau III. Cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${claasificacao}`
    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc)