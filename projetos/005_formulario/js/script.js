const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    //verifica se o nome está vazio
    if(nameInput.value === '') {

        alert('Por favor preencha seu nome')
        return
    }

    //  Verificar se o e-mail está preenchido e se é válido
    if(emailInput.value === '') {
        alert('Por favor, preencha o seu email')
    }
    
    //  Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit()
})