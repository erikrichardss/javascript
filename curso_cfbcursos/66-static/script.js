class npc {

    static alerta = false;

    constructor(energia) {

        this.energia = energia;
    }

    info = function() {

        console.log(`Energia: ${this.energia} - Alerta: ${npc.alerta}`);
    }

    static setAlerta = function() {
        npc.alerta = true;
    }
}

const npc1 = new npc(300);

npc.setAlerta();

npc1.info();