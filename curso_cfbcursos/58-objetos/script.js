class Carro {

    constructor(nome, tipo) {
        this.nome = nome;

        if (tipo == 1) {
            this.tipo = "Esportivo";
            this.veimax = 300;
        } else if (tipo == 2) {
            this.tipo = "normal";
            this.veimax = 180;
        } else if (tipo == 3) {
            this.tipo = "Passeio";
            this.veimax = 250;
        } else {
            this.tipo = "Militar";
            this.veimax = 180;
        }
    }

    getNome() { return this.nome; }

    getTipo() { return this.tipo; }

    getVelocidade() { return this.veimax; }

    setTipo(tipo) { this.tipo = tipo; }

    setVeimax(veimax) { this.veimax = veimax; }

    setNome(nome) { this.nome = nome; }

    info() {
        console.log(`nome: ${this.nome}`);
        console.log(`tipo: ${this.tipo}`);
        console.log(`velocidade: ${this.veimax}`);
        console.log(`------------------`);
    }
}

let c1 = new Carro("Rapidão", 1);
let c2 = new Carro("Luxo", 2);
let c3 = new Carro("Bombado", 3);
let c4 = new Carro("Carregado", 4);

console.log(c1);
console.log(c2);
console.log(c3);