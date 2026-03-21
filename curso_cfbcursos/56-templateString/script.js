const caixa = document.querySelector("#caixa");

const carros = ["Polo", "Golf", "T-Cross", "HRV"];

let ul = `<ul>`

carros.map((element) => {

    ul += `<li>${element}<li/>`;
});

ul += `<ul/>`

caixa.innerHTML = ul;