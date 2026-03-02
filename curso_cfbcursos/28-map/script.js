// /* const cursos = ["html", "css", "javascript", "java", "banco de dados"];

// let c = cursos.map((el, i) => {
//     return el;
// });

// console.log(c) */

// let el = document.querySelectorAll("div");

// el = [...el];

// el.map((e, i) => {
    
//     console.log(e.innerHTML);
// })

// const el = document.querySelectorAll("div");
// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML);
// console.log(el);

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e*2;
let num = ['1', '2', '3', '4', '5'].map(dobrar);

num.map(converterInt);
console.log(num);