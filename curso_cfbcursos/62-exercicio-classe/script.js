const militar = document.querySelector("#tipoMilitar");
const normal = document.querySelector("#tipoNormal");
const blindagem = document.querySelector("#blindagem");
const municao = document.querySelector("#municao");
const nome = document.querySelector("#nome");
const portas = document.querySelector("#portas");
const carros = document.querySelector("#carros");
const adicionarCarro = document.querySelector("#adicionarCarro");

let aCarros = [];

const removerCarro = (remover) => {
    
     aCarros = aCarros.filter((element) => {
    
        return element.nome != remover;
    });
}

militar.addEventListener("click", (event) => {

    nome.value = "";
    portas.value = "";
    blindagem.value = "";
    municao.value = "";

    blindagem.removeAttribute("disabled");
    municao.removeAttribute("disabled");
});

normal.addEventListener("click", (event) => {

    nome.value = "";
    portas.value = "";
    blindagem.value = "";
    municao.value = "";

    blindagem.setAttribute("disabled", "disabled");
    municao.setAttribute("disabled", "disabled");
});


const gerenciarExibicaoCarros = () => {

    carros.innerHTML = "";

    aCarros.forEach((c) => {


        const div = document.createElement("div");
        const btn = document.createElement("button");

        div.setAttribute("class", "carro");
        div.setAttribute("data-nome", c.nome);

        div.innerHTML += `Nome: ${c.nome} - Portas: ${c.portas} - Blindagem ${c.blindagem} - Munição: ${c.municao} - Cor: ${c.cor}`;

        btn.innerHTML = "Remover";
        div.appendChild(btn);

        carros.appendChild(div);

        btn.addEventListener("click", (event) => {

            const remover = event.target.parentNode.dataset.nome;

            removerCarro(remover);
            gerenciarExibicaoCarros(); 
        });
    });
}

adicionarCarro.addEventListener("click", () => {

    if (normal.checked) {

        const c = new Carro(nome.value, portas.value);
        aCarros.push(c);
    } else {

        const c = new Militar(nome.value, portas.value, blindagem.value, municao.value);

        aCarros.push(c);
    }

    gerenciarExibicaoCarros();
});

class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }

    ligar = function () {
        this.ligado = true;
    }

    desligar = function () {
        this.ligado = false;
    }

    setCor = function (cor) {
        this.cor = cor;
    }
}

class Militar extends Carro {

    constructor(nome, portas, blindagem, municao) {

        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor("Verde");
    }

    atirar = function () {

        if (this.municao > 0) {

            this.municao--;
        }
    }
}

class utilitario extends Carro {

    constructor(nome, portas, lugares) {

        super(nome, portas)
        this.lugares = lugares;

    }
}

const c1 = new Carro("Normal", 4);
c1.ligar();
c1.setCor("Preto");


const c2 = new Militar("Lutador", 1, 100, 50);

c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();

const c3 = new utilitario("");

console.log(c1.nome);
console.log(c1.portas);
console.log(`${(c1.ligado ? "Sim" : "Não")}`);
console.log(c1.vel);
console.log(c1.cor);

console.log("---------------------");

console.log(c2.nome);
console.log(c2.portas);
console.log(`${(c2.ligado ? "Sim" : "Não")}`);
console.log(c2.vel);
console.log(c2.cor);
console.log(c2.blindagem);
console.log(c2.municao);