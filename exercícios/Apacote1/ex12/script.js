const produtos = [
    "Arroz",
    "feijão",
    "Batata",
    "Macarrão",
    "Granola",
    "Pepino",
    "Maçã"
];

const pesquisa = document.querySelector("#search");
const listaProdutos = document.querySelector("#lista-produtos");

function inicializarProdutos(produto) {

    listaProdutos.textContent = "";

    produto.forEach((inicializar) => {
        
        const li = document.createElement("li");
        li.textContent = inicializar;
        listaProdutos.appendChild(li);
    });
}

pesquisa.addEventListener("input", (buscar) => {

    const buscarProduto = buscar.target.value.toLowerCase();

    const produtosFiltrados = produtos.filter(produto => 
        produto.toLowerCase().includes(buscarProduto)
    );

    inicializarProdutos(produtosFiltrados);
});

inicializarProdutos(produtos);