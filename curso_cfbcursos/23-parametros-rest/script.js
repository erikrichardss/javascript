function soma(...valores) {
    let tam = valores.length;
    let res = 0;
    
    for (let soma of valores) {
        res += soma;
    }
    return res;
}

console.log(soma(10, 5));