/* function saudacao(nome) {
    const mensagem = "Ola, ";

    function exibirMensagem() {
        return mensagem + " " + nome;
    }

    return {
        exibirMensagem
    }
}

const saudacaoMensagem = saudacao("Erik");

console.log(saudacaoMensagem.exibirMensagem()); */

function contador() {
    let numero = 0;

    function incrementar() {
        return numero += 1;
    }

    return {
        incrementar
    }
}

const contar = contador();

console.log(contar.incrementar());
console.log(contar.incrementar());
console.log(contar.incrementar());