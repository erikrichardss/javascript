const caixa1 = document.querySelector("#caixa1");
const btn_c = document.querySelector(".curso");
const c1_2 = document.querySelector("#c1_2");

const cursos = ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "ReactNative"];

cursos.map((element, chave) => {

    const novoElemento = document.createElement("div");
    
    novoElemento.setAttribute("id", "c" + chave);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.textContent = element;

    const btn_lixeira = document.createElement("i");

    btn_lixeira.setAttribute("class", "fa-solid fa-trash")
    novoElemento.appendChild(btn_lixeira);

    btn_lixeira.addEventListener("click", (event) => {
       
        caixa1.removeChild(event.target.parentNode);
    });

    caixa1.appendChild(novoElemento);
});
