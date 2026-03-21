const soma = document.querySelector("#botaoSoma");
const subtrair = document.querySelector("#botaoSubtrair");
const multiplicar = document.querySelector("#botaoMultiplicar");
const dividir = document.querySelector("#botaoDividir");
const resultado = document.querySelector("#res");

const operacoes = [
    () => {
        const valor1 = Number(document.querySelector("#valor1").value);
        const valor2 = Number(document.querySelector("#valor2").value);

        resultado.value = valor1 + valor2;
        /* return valor1 + valor2; */
    },

    () => {
        const valor1 = Number(document.querySelector("#valor1").value);
        const valor2 = Number(document.querySelector("#valor2").value);

        resultado.value = valor1 - valor2;
    },

    () => {
        const valor1 = Number(document.querySelector("#valor1").value);
        const valor2 = Number(document.querySelector("#valor2").value);

        resultado.value = valor1 * valor2;
    },

    () => {
        const valor1 = Number(document.querySelector("#valor1").value);
        const valor2 = Number(document.querySelector("#valor2").value);

        const containerAlerta = document.querySelector(".alerta");
        const fechar = document.querySelector(".fechar");

        if (valor2 == 0) {
            containerAlerta.classList.toggle("containerAlerta");
        } else {
            resultado.value = valor1 / valor2;
        }

        fechar.addEventListener("click", () => {

            containerAlerta.classList.toggle("containerAlerta");
        });
    }
];

soma.addEventListener("click", () => { operacoes[0](); });
subtrair.addEventListener("click", () => { operacoes[1](); });
multiplicar.addEventListener("click", () => { operacoes[2](); });
dividir.addEventListener("click", () => { operacoes[3](); });
