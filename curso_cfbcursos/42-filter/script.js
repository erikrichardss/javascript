const idades = [15, 21, 30, 17, 18, 44, 12, 50];

const filtroMaior18 = (valor) => {

    if (valor >= 18)
        return valor;
}

const maior = idades.filter((valor, indice, array) => {

    if (valor >= 18)
        return valor;
});

const menor = idades.filter((valor, indice, array) => {

    if (valor < 18)
        return valor;
});

console.log(maior);
console.log(menor);
