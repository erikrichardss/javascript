const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if (nameInput.value === '') {

        alert('Por favor preencha seu nome');
        return;
    }

    //  Verificar se o e-mail está preenchido e se é válido
    if (emailInput.value === '' || !isEmailValid(emailInput.value)) {

        alert('Por favor, preencha o seu email');
        return;
    }

    // verificar se a senha está preenchida
    if (!validatePassword(passwordInput.value, 8)) {

        alert("A senha precisa de no mínimo 8 digítos.")
    }

    // verificar se a situação foi selecionada
    if (jobSelect.value = "") {

        alert("Por favor, selecione a sua situação");
        return;   
    }

    // verifica se a mensagem está preenchida
    if (messageTextarea.value === "") {

        alert("Por favor, escreva uma mensagem.");
        return;  
    }
    
    //  Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
})

// Função que válida e-mail
function isEmailValid(email) {

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        // usuário12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {

        return true;
    }

    return false;

}

// função que válida Senha
function validatePassword(password, minDigits) {

    if (password.lenght >= minDigits) {

        return true;
    }

    return false;

}