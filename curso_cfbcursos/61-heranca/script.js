class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }

    ligar = function() {
        this.ligado = true;
    }

    desligar = function() {
        this.ligado = false;
    }

    setCor = function(cor) {
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

    atirar = function() {

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