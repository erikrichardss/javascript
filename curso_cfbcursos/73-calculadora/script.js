const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".op")];
const teclasRes = document.querySelector(".res");
const pDisplay = document.querySelector("#pDisplay");
const tOn = document.querySelector("#tOn");
const tLimpar = document.querySelector("#tLimpar");
const tIgual = document.querySelector("#tgual");
const tcpy = document.querySelector("#tcpy");

let sinal = false;
let decimal = false;

teclasNum.forEach((element) => {

    element.addEventListener("click", (event) => {

        sinal = false;

        
        if (event.target.innerHTML == ",") {
            
            if (!decimal) {
                
                decimal = true;
                
                if (pDisplay.innerHTML == "0") {
                    
                    pDisplay.innerHTML = "0"
                }
                pDisplay.innerHTML += event.target.innerHTML;
            }
        } else {
            
            if (pDisplay.innerHTML == "0") {
    
                pDisplay.innerHTML = "";
            }

            pDisplay.innerHTML += event.target.innerHTML;
        }
    });
});

teclasOp.forEach((element) => {

    element.addEventListener("click", (event) => {

        if (!sinal) {

            sinal = true;

            if (pDisplay.innerHTML == "0") {

                pDisplay.innerHTML = "";
            }

            if (event.target.innerHTML == "x") {

                pDisplay.innerHTML += "*";
            } else {

                pDisplay.innerHTML += event.target.innerHTML;
            }
        }
    });
});

tLimpar.addEventListener("click", (event) => {

    sinal = false;
    decimal = false;
    pDisplay.innerHTML = 0;
});

tIgual.addEventListener("click", (event) => {

    sinal = false;
    decimal = false;
    
    const res = eval(pDisplay.innerHTML);
    pDisplay.innerHTML = res;
});

tcpy.addEventListener("click", (event) => {

    navigator.clipboard.writeText(pDisplay.innerHTML);

    /* const test = document.querySelector("#test");
    test.select();
    test.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(test.value); */
});

