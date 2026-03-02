const notas = [7.5, 8.0, 6.5, 9.0];

let media = 0;

for (const notaAlunos in notas) {
    
    console.log(`Indice ${notaAlunos} nota ${notas[notaAlunos]}`);

    media += notas[notaAlunos];
    
}

media /= notas.length;
console.log(`media ${media}`);

console.log("-----------------");

for (const forNotas of notas) {
    console.log(forNotas)
}

console.log("-----------------");

const aluno = {
    nome: "Carlos",
    idade: 18,
    curso: "Informática",
    aprovado: true
};

for (const alunoObj in aluno) {
    console.log(`${alunoObj}: ${aluno[alunoObj]}`);
}

console.log("-----------------");

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 }
];

let total = 0;

for (const produtosFor of produtos) {
    console.log(produtosFor);
    total += produtosFor.preco;
    console.log(total);
}

console.log("-----------------");