const produtos = [
    "Manete",
    "Mouse",
    "Teclado",
    "Tv",
    "Lampada",
    "Mesa",
    "Fone",
    "Carregador",
];

const buscaPesquisa = document.querySelector("#search");
const listaProdutos = document.querySelector("#lista-produtos");

function mostarLista(lista) {

    listaProdutos.innerHTML = "";
    
    lista.forEach((produto) => {
        
        const li = document.createElement("li");

        li.textContent = produto;
        listaProdutos.appendChild(li);
    });
}

buscaPesquisa.addEventListener("input", (buscar) => {

    const filtro = buscar.target.value.toLowerCase();

    const filtrados = produtos.filter(buscarProdutos => 
        
        buscarProdutos.toLowerCase().includes(filtro)
    );

    mostarLista(filtrados);
});

mostarLista(produtos);