function* pergunta() {
    const nome = yield "Qual seu nome?";
    const esportes = yield "Qual seu esporte favorito?";
    return "seu nome é " + nome + " esporte " + esportes;
}

const perguntas = pergunta();
console.log(perguntas.next().value);
console.log(perguntas.next("Bruno").value);
console.log(perguntas.next("Bike").value);

function* contador() {
    let i = 0;

    while (true) {
        yield i++;

        if (i < 5) {
            break;
        }
    }
}

const contar = contador();

for (const contarOf of contar) {
    console.log(contarOf);
}