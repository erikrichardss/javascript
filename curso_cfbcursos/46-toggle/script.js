const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"];
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado");
const btnRemoveCuyrso = document.querySelector("#btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.querySelector("#btnAdicionarNovoCursoAntes");
const btnAdicionarNovoCursoDepois = document.querySelector("#btnAdicionarNovoCursoDepois");
const nomeCurso = document.querySelector("#nomeCurso");

let indice = 0;

const tirarSelecao = () => {

    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];

    cursosSelecionados.map((el) => {

        el.classList.remove("selecionado");
    });
}

const criarNovoCurso = (curso) => {

    const novoElemento = document.createElement("div");

    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;

    novoElemento.addEventListener("click", (evt) => {

        tirarSelecao(evt);
        evt.target.classList.toggle("selecionado");
    });

    return novoElemento;
}

cursos.map((el, chave) => {

    const novoElemento = criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    indice++;
});

const cursoSelecinado = () => {

    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];

    return cursosSelecionados[0];
}

btnCursoSelecionado.addEventListener("click", (evt) => {

    try {
        alert("Curso selecionado: " + cursoSelecinado().innerHTML);
    } catch (ex) {
        alert("Selecione um curso");
    }
});

btnRemoveCuyrso.addEventListener("click", (evt) => {

    const cursoSelecionado = cursoSelecinado();
    if (cursoSelecionado != undefined) {
        cursoSelecionado.remove();
    } else {
        alert("Selecione um curso");
    }
});

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {

    try {
        if (nomeCurso.value != "") {
            const novoElemento = criarNovoCurso(nomeCurso.value);

            caixaCursos.insertBefore(novoElemento, cursoSelecinado());
        } else {
            alert("Insira o nome do curso");
        }
    } catch (ex) {
        alert("Selecione um curso");
    }

    nomeCurso.value = "";
});

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {

    try {
        if (nomeCurso.value != "") {
            const novoElemento = criarNovoCurso(nomeCurso.value);

            caixaCursos.insertBefore(novoElemento, cursoSelecinado().nextSibling);
        } else {
            alert("Selecione um curso");
        }
    } catch (ex) {
        alert("Selecione um curso");
    }

    nomeCurso.value = "";
});