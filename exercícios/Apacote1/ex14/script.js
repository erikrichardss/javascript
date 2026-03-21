const inputNome = document.querySelector("#inputNome");
const btnAdicionar = document.querySelector("#btnAdicionar");
const lista = document.querySelector("#lista");

btnAdicionar.addEventListener("click", () => {
    
    const contato = inputNome.value;
    const createLi = document.createElement("li");
    const createIcon = document.createElement("i");

    if (inputNome.value != "") {
    
        createIcon.setAttribute("class", "fa-solid fa-trash");

        createLi.textContent = contato;
        createLi.appendChild(createIcon);
        
        lista.appendChild(createLi);

        createIcon.addEventListener("click", (event) => {

            const remover = event.target;

            lista.removeChild(remover.parentNode);
        });
    } else {
        
        inputNome.style.border = "1px solid red";
    }
    
    inputNome.value = "";
});

const buscar = document.querySelector("#buscar");

buscar.addEventListener("input", () => {

    const textoBusca = buscar.value.toLowerCase();
    const itens = Array.from(lista.children);

    itens.forEach((item) => {

        const nome = item.textContent.toLowerCase();

        if (nome.includes(textoBusca)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    /* const filtrados = itens.filter((item) =>
        item.textContent.toLowerCase().includes(textoBusca)); */
});