const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso", "JavaScript");
mapa.set("10", "CFB Cursos");
mapa.set(10, 100);
mapa.set("calanl", 100);

mapa.delete(1);

console.log(mapa);

let pes = "teste";
let res = "";

if (mapa.has(pes)) {
    res = "A chave existe com o valor " + mapa.get(pes);
} else {
    res = "A chave não existe"
}

res += "<br/> o tamanho da coleção é " + mapa.size;

caixa.innerHTML = res;

mapa.forEach((elementos) => {

    console.log(elementos);
});