function Pessoa(nome, idade) {

    this.nome = nome;
    this.idade = idade;

    this.getNome = function() { return this.nome; },

    this.getIdade = function() { return this.idade; },

    info = function () {
        console.log(`nome: ${this.nome}`);
        console.log(`idade: ${this.idade}`);
        console.log(`------------------`);
    }
}

let pessoas = [];

const btnAdicionar = document.querySelector("#adicionar");
const res = document.querySelector(".res");

const addPessoa = () => {

    res.innerHTML = "";

    pessoas.map((p) => {

        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");

        div.textContent = `Nome: ${p.getNome()}, idade: ${p.getIdade()}`;

        res.appendChild(div);
    });
}

btnAdicionar.addEventListener("click", (event) => {

    const nome = document.querySelector("#nome");
    const idade = document.querySelector("#idade");
    const pessoa = new Pessoa(nome.value, idade.value);

    pessoas.push(pessoa);

    nome.value = "";
    idade.value = "";

    nome.focus();

    addPessoa();
});