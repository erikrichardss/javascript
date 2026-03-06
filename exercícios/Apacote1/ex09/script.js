const lista = document.querySelector("#lista");

lista.addEventListener("click", (event) => {

    const liSelecionado = event.target;

    liSelecionado.classList.toggle("marcar");
})