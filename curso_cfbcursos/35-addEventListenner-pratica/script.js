const caixa2 = document.querySelector("#caixa2");
const caixa1 = document.querySelector("#caixa1");
const botaoCopiar = document.querySelector("#btn_transferir");
const cursos = [...document.querySelectorAll(".curso")];

cursos.map((element) => {

    element.addEventListener("click", (event) => {

        const curso = event.target;
        curso.classList.toggle("selecionado");
    });
});

botaoCopiar.addEventListener("click", () => {

    const cursoSelecionados = [...document.querySelectorAll(".selecionado")];
    const cursoNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")];
    // console.log(cursoSelecionados);
    cursoSelecionados.map((element) => {

        caixa2.appendChild(element);
    });

    cursoNaoSelecionados.map((element) => {

        caixa1.appendChild(element);
    });

});
