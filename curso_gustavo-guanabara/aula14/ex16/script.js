function contar() {
    let inicio = window.document.querySelector("#tab1")
    let fim = window.document.querySelector("#tab2")
    let passo = window.document.querySelector("#tab3")
    let resultado = window.document.querySelector("#res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[Erro] Preencha todos os campos!")
        resultado.innerHTML = "Impossivel contar!"
    }
    else {
        resultado.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        else if (i < f) {
           for(let c = i; c <= f; c += p) {
            resultado.innerHTML += ` ${c} \u{1f449} ` 
            }
        
        }
        else {
            for(let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1f449}`
            }
        }
        resultado.innerHTML += ` \u{1f3c1} `
    }
}