class CarroPadrao {

    constructor() {
        
        if (this.constructor === CarroPadrao) {

            throw new TypeError("Essa classe não pode ser instanciada");
        }

        if (this.ligar === undefined) {

            throw new TypeError("É obrigatório imprementar o metodo ligar");
        }

        if (this.desligar === undefined) {

            throw new TypeError("É obrigatório implementar o metodo desligar");
        }

        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}

class Carro extends CarroPadrao {

    constructor(tipo, estagioTurbo) {

        super();

        this.Turbo = new Turbo(estagioTurbo);

        if (tipo == 1) {

            this.velMax = 120;
            this.nome = "Normal";
        } else if (tipo == 2) {

            this.velMax = 160;
            this.nome = "Esportivo";
        } else if (tipo == 3) {

            this.velMax = 200;
            this.nome = "SuperEsportivo";
        }

        this.velMax += this.Turbo.pot;
    }

    info() {

        console.log(`Nome ${this.nome} - 
            Velocidade Máxima ${this.velMax} - 
            Turbo ${this.Turbo.pot} -
            Rodas ${this.rodas} -
            Portas ${this.portas} -
            Ligado ${this.ligado}`);

        console.log("----------------------")
    }

    ligar() {

        this.ligado = true;
    }

    desligar() {
        
        this.ligado = false;
    }
}

class Turbo {

    constructor(e) {

        if (e == 0) {

            this.pot = 0;
        } else if (e == 1) {

            this.pot = 50;
        } else if (e == 2) {

            this.pot = 25;
        } else if (e == 3) {

            this.pot = 100;
        }
    }
}

class CarroEspecial extends Carro {

    constructor(estagioTurbo) {

        super(4, estagioTurbo);
        this.tipoInfo = 1;
        this.velMax = 300 + this.Turbo.pot;
        this.nome = "Carro Especial";
    }

    info() {

        if (this.tipoInfo == 1) {

            super.info();
        } else {

            console.log(`Nome: ${this.nome} - 
            Velocidade Máxima: ${this.velMax} - 
            Turbo: ${this.Turbo.pot}`);

            console.log("----------------------")
        }
    }
}

const c1 = new Carro(1, 0);
const c2 = new Carro(1, 1);
const c3 = new CarroEspecial(3);

c1.info();
c2.info();
c3.info();