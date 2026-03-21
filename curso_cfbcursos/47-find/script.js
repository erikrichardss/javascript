const pArray = document.querySelector("#array")
const pesquisar = document.querySelector("#txt_pesquisar")
const botaoPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementosArray = ["HTML", "CSS", "Java", "JavaScript"]

pArray.innerHTML = elementosArray

botaoPesquisar.addEventListener("click", (event) => {

    resultado.textContent = "Valor não encontrado"
    elementosArray.find((element, indice) => {
        
        if (element.toLowerCase() === pesquisar.value.toLowerCase()) {
            resultado.innerHTML = "Valor encontrado " + element + " na posição " + indice
        }
    })
})