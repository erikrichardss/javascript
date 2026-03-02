function criarContaBancaria(titular, saldoInicial) {

    let saldo = saldoInicial;

    function depositarValor(valor) {

        saldo += valor;
    }

    function sacarValor(valor) {

        if (saldo > valor) {
            saldo -= valor;
            console.log("Saque aprovado!");
        } else {
            console.log("Saldo insuficiente");
        }
    }

    function verSaldo() {
        return saldo;
    }

    function verTitular() {
        return titular;
    }

    return {
        depositarValor,
        sacarValor,
        verSaldo,
        verTitular
    }
}

const contaBancaria = criarContaBancaria("Erik", 250);

contaBancaria.depositarValor(300);
contaBancaria.sacarValor(130);

console.log(contaBancaria.verSaldo());
console.log(contaBancaria.verTitular());