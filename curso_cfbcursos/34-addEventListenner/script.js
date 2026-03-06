/* const c1 = document.querySelector(".c1"); */
const cursos = [...document.querySelectorAll(".curso")];

cursos.map((el) => {

    el.addEventListener("click", (event) => {

        const element = event.target;
        console.log(element);
        element.classList.add("destaque");
    })
})

/* c1.addEventListener("click", (event) => {

    const element = event.target;
    element.classList.add("destaque");
}); */