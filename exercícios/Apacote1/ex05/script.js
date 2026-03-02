/* const precos = [10, 25, 40, 100];
const precosComDesconto = (preco) => preco -= preco * 0.10;

console.log(precos.map(precosComDesconto)); */

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 }
];

const newProducts = produtos.map((elementos) => {
    let nomeMaiuscula = elementos.nome.toLocaleUpperCase();
    let precoAlmento = elementos.preco += elementos.preco * 0.20;
    console.log(nomeMaiuscula, precoAlmento);
});