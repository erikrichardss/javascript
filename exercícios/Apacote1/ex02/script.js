function criarCarrinho() {

    const itens = [];

    function adicionarItem(nome, preco) {

        itens.push({nome, preco});
    }

    function calcularTotal() {
        let total = 0;

        for (const item of itens) {
            total += item.preco;
        }

        return total;
    }

    function listarItens() {
        for (const listarProdutos of itens) {
            console.log(listarProdutos);
        }
    }

    return {
        adicionarItem,
        calcularTotal,
        listarItens
    }
}

const carrinho = criarCarrinho();

carrinho.adicionarItem("Teclado", 70.90);
carrinho.adicionarItem("Mouse", 70.90);

console.log(carrinho.listarItens());
console.log("Total: " + carrinho.calcularTotal())