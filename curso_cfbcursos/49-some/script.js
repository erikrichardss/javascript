const pArray = document.querySelector("#array")
const pesquisar = document.querySelector("#txt_pesquisar")
const botaoPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementosArray = [22, 45, 21, 32, 7, 87, 34, 12, 76, 3, 6,]

pArray.innerHTML = elementosArray

botaoPesquisar.addEventListener("click", (event) => {
    
    const rest = elementosArray.some((element, indice) => {

        if (element < 18) {
            resultado.innerHTML = "Array não conforme na posição " + indice
        }
        return element >= 18
    })

    if (rest) {
        resultado.innerHTML = "ok"
    }
})