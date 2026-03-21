/* const produtos = ["Mouse", "Teclado", "Monitor", "Mouse"];

const semCopias = produtos.filter((produto, index) => {

    return produtos.indexOf(produto) === index;
});

console.log(semCopias);

console.log(produtos.includes("Monitor"));
console.log(produtos.indexOf("Teclado"));
 */
/* const numeros = [1, 2, 2, 3, 4, 4, 5];

let novosNumeros = new Set(numeros);

console.log(novosNumeros);
console.log(novosNumeros.has(3));

novosNumeros.add(10);

console.log(novosNumeros); */

/* const usuarios = new Map();

usuarios.set("u1", { nome: "Ana", idade: 20 });
usuarios.set("u2", { nome: "Carlos", idade: 25 });
usuarios.set("u3", { nome: "Maria", idade: 30 });

console.log(usuarios.get("u2"));
console.log(usuarios.has("u4"));
usuarios.delete("u1");
console.log(usuarios); */

/* const emails = [
  "a@gmail.com",
  "b@gmail.com",
  "a@gmail.com",
  "c@gmail.com"
];

const limpaDeEmailsDuplicados = new Set(emails);

console.log(limpaDeEmailsDuplicados);
console.log(limpaDeEmailsDuplicados.has("d@gmail.com"));

const newEmails = [...limpaDeEmailsDuplicados];

console.log(newEmails); */

/* const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 }
];

const mapa = new Map();

mapa.set(produtos[0].nome, produtos[0].preco);

console.log(mapa); */

const numeros = [1, 2, 3, 2, 1, 4, 5, 4];

const contarNumerosExistentes = new Map();

for (const numero of numeros) {
    if (contarNumerosExistentes.has(numero)) {
        contarNumerosExistentes.set(numero, contarNumerosExistentes.get(numero) + 1);
    } else {
        contarNumerosExistentes.set(numero, 1);
    }
}

console.log(contarNumerosExistentes);