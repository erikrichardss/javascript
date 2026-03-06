const cursos = [...document.querySelectorAll(".curso")];

cursos.map((curso) => {
    const transferir = document.querySelector("#btn_transferir");

    curso.addEventListener("click", (event) => {

        const selecionado = event.target;
        selecionado.classList.toggle("selecionado");
    });

    transferir.addEventListener("click", () => {
        const caixa1 = document.querySelector("#caixa1");
        const caixa2 = document.querySelector("#caixa2");

        const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
        const cursosNaoSelecionados = [...document.querySelectorAll(".curso :not(.selecionado)")];

        cursosSelecionados.map((selecionado) => {

            caixa2.appendChild(selecionado);
        });

        cursosNaoSelecionados.map((naoSelecionados) => {

            caixa1.appendChild(naoSelecionados);
        });
    });
});