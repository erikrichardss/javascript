const pessoa = {
    nome: "Bruno",
    canal: "CFB",
    curso: "JavaScript",

    aulas: {
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional",
    }
}

const stringJson = JSON.stringify(pessoa);
const objectPessoa = JSON.parse(stringJson);

console.log(stringJson);
console.log(objectPessoa);
