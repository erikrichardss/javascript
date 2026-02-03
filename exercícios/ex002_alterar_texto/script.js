const text = document.querySelector('#text')
const submit = document.querySelector('#submit')
let resText=  document.querySelector('#resText')

submit.addEventListener('click', function(event) {
    event.preventDefault() //   faz com que a mensagem permaneça na tela

    if(text.value == '') {
        resText.textContent = 'Campo vazio, insira um texto!'
        resText.style.color = 'red'
    } else {
        resText.textContent = text.value
    }
})