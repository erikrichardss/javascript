const caixa1 = document.querySelector("#caixa1");
const btnC1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".curso")];

caixa1.addEventListener("click", (event) => {

    console.log("clicou");
    console.log(event.target);
});

cursos.map((curso) => {

    curso.addEventListener("click", (element) => {

        element.stopPropagation();
    });
});

btnC1.addEventListener("click", (event) => {

    event.stopPropagation();
});