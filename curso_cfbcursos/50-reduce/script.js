const pArray = document.querySelector("#array")
const pesquisar = document.querySelector("#txt_pesquisar")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementosArray = [1, 2, 3, 4, 5, 6]
const arrayBefore = []
const arrayAfter = []
const dobro = []

pArray.innerHTML = "["+elementosArray+"]"

btnReduzir.addEventListener("click", (event) => {
    
    dobro.push(elementosArray[0] * 2)

    resultado.innerHTML = elementosArray.reduce((anterior, atual, posicao) => {
        
        arrayBefore.push(anterior)
        arrayAfter.push(atual)
        dobro.push(atual * 2)

        return atual + anterior;
    })

    resultado.innerHTML = `</br> Value before ${arrayBefore} </br> Value after ${arrayAfter} </br> Dobro ${dobro}`
})