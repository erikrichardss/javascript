const arrayProdutos = ["Arroz", "Feijão", "Batata", "Macarrão"];
const lista = document.querySelector("#lista-produtos");


arrayProdutos.map((element, key) => {

    const novoElemento = document.createElement("li");
    novoElemento.textContent = element;
    novoElemento.setAttribute("class", "produto" + key);
    lista.appendChild(novoElemento);
});