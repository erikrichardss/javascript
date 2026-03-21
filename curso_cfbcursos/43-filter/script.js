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

const criarNovoCurso = (curso) => {

    const novoElemento = document.createElement("div");

    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;

    const comandos = document.createElement("div");

    comandos.setAttribute("class", "comandos");

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);

    return novoElemento;
}

cursos.map((el, chave) => {

    const novoElemento = criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    indice++;
});

const radioSelecinado = () => {

    const todosRadios = [...document.querySelectorAll("input[type=radio]")];

    const radioSelecionado = todosRadios.filter((ele, ind, arr) => {

        return ele.checked;
    });

    return radioSelecionado[0];
}

btnCursoSelecionado.addEventListener("click", (evt) => {

    const rs = radioSelecinado();

    try {
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent;
        alert("Curso selecionado: " + cursoSelecionado);
    } catch (ex) {
        alert("Selecione um curso");
    }
});

btnRemoveCuyrso.addEventListener("click", (evt) => {

    const rs = radioSelecinado();

    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode;
        cursoSelecionado.remove();
    } else {
        alert("Selecione um curso");
    }
});

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {

    const rs = radioSelecinado();

    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoElemento = criarNovoCurso(nomeCurso.value);

            caixaCursos.insertBefore(novoElemento, cursoSelecionado);
        } else {
            alert("Insira o nome do curso");
        }
    } catch (ex) {
        alert("Selecione um curso");
    }

    nomeCurso.value = "";
});

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {

    const rs = radioSelecinado();

    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoElemento = criarNovoCurso(nomeCurso.value);

            caixaCursos.insertBefore(novoElemento, cursoSelecionado.nextSibling);
        } else {
            alert("Selecione um curso");
        }
    } catch (ex) {
        alert("Selecione um curso");
    }

    nomeCurso.value = "";
});