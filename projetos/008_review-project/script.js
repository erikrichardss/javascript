const reviews = [
    {
        id: 1,
        name: "Susan smith",
        job: "Web Developer",
        img: "https://this-person-does-not-exist.com/img/avatar-gen541dd5c94f1094123e983b38efd71bf4.jpg",
        text: "A web developer designs, builds, and maintains websites and web applications, turning ideas into functional and user-friendly digital experiences.",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://this-person-does-not-exist.com/img/avatar-genbd022bf9feec63c451536f4391a9939b.jpg",
        text: "A web designer improves user experience through good visual design.",
    },
    {
        id: 3,
        name: "Nathaly Rose",
        job: "Intern",
        img: "https://this-person-does-not-exist.com/img/avatar-gen0100e7f5007e4bc4db71e0f8729c8a15.jpg",
        text: "An intern learns new skills while supporting the team and gaining practical work experience.",
    },
    {
        id: 4,
        name: "Alexis White",
        job: "The Boss",
        img: "https://this-person-does-not-exist.com/img/avatar-gencf3598def9bf1d47561923d53cd40bdb.jpg",
        text: "The boss leads the team, makes decisions, and ensures goals are achieved efficiently.",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {

    reviews[currentItem];
    
});

function showPerson(person) {
    
    const item = reviews[person];
    
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

nextBtn.addEventListener("click", () => {

    currentItem++;
    
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem)

});

prevBtn.addEventListener("click", () => {

    currentItem--;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);

});

randomBtn.addEventListener("click", () => {

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);

})