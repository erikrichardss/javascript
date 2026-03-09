const inputNome = document.querySelector("#inputNome");
const btnAdicionar = document.querySelector("#btnAdicionar");
const lista = document.querySelector("#lista");

btnAdicionar.addEventListener("click", () => {
    
    if (inputNome.value != "") {
    
        const contato = inputNome.value;
        const createLi = document.createElement("li");
        const createIcon = document.createElement("i");

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
});

const listChildren = lista.children.filter();