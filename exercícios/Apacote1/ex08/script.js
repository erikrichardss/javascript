const botoes = document.querySelectorAll(".cor");

botoes.forEach(function (botao) {

    botao.addEventListener("click", (event) => {
        
        const texto = event.target.textContent;
        const mensagem = document.querySelector("#mensagem");

        mensagem.textContent = `Você clicou no botão ${texto}`;
        
        if (texto === "Vermelho") {            
            mensagem.style.color = "red";
        }
        if (texto === "Azul") {            
            mensagem.style.color = "blue";
        }
        if (texto === "Verde") {            
            mensagem.style.color = "green";
        }
    })
});