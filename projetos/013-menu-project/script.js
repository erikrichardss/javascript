const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.90,
        img: "https://media.istockphoto.com/id/136164303/pt/foto/pilha-de-panquecas.jpg?b=1&s=612x612&w=0&k=20&c=OGXneowIDnD67gY3y_IXshcRRXZ88fBFFmHWsM0_eF0=",
        desc: "Fluffy buttermilk pancakes served warm with maple syrup and butter, creating the perfect sweet and soft breakfast experience.",
    },
    {
        id: 2,
        title: "Dinner Double",
        category: "lunch",
        price: 13.99,
        img: "https://images.pexels.com/photos/29253307/pexels-photo-29253307.jpeg",
        desc: "A hearty double beef burger layered with melted cheese, fresh lettuce, tomatoes, and our signature house sauce.",
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://images.pexels.com/photos/6174874/pexels-photo-6174874.jpeg",
        desc: "An oversized chocolate milkshake topped with whipped cream and chocolate drizzle for an indulgent treat.",
    },
    {
        id: 4,
        title: "Country Delight",
        category: "lunch",
        price: 20.99,
        img: "https://images.pexels.com/photos/20003237/pexels-photo-20003237.jpeg",
        desc: "Grilled chicken served with mashed potatoes, seasonal vegetables, and a rich homemade gravy.",
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "https://images.pexels.com/photos/14701529/pexels-photo-14701529.jpeg",
        desc: "Grilled chicken served with mashed potatoes, seasonal vegetables, and a rich homemade gravy.",
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "https://images.pexels.com/photos/11512980/pexels-photo-11512980.jpeg",
        desc: "Creamy vanilla milkshake blended with Oreo cookies and topped with crushed cookie pieces.",
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "lunch",
        price: 8.99,
        img: "https://images.pexels.com/photos/15801062/pexels-photo-15801062.jpeg",
        desc: "Juicy burger loaded with crispy bacon strips, melted cheese, and smoky barbecue sauce.",
    },
    {
        id: 8,
        title: "Amerian Classic",
        category: "lunch",
        price: 12.99,
        img: "https://images.pexels.com/photos/20722044/pexels-photo-20722044.jpeg",
        desc: "Traditional beef burger with lettuce, tomato, onion, pickles, and classic ketchup and mustard.",
    },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {

    displayMenuItems(menu);
    displayMenuButtons();

});

function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map(function (item) {

        return `<article class="menu-item">
                <img src="${item.img}" alt="${item.title}" class="photo">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price.toFixed(2)}</h4>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </article>`;

    }).join("");

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {

    const categories = menu.reduce(function (values, item) {

        if (!values.includes(item.category)) {
            values.push(item.category);
        }

        return values;

    }, ["all"]);

    const categoryBtns = categories.map(function (category) {

        return `<button class="filter-btn" type="button" data-id="${category}">
                    ${category}
                </button>`;

    }).join("");

    container.innerHTML = categoryBtns;

    const filterBtns = container.querySelectorAll(".filter-btn");

    filterBtns.forEach(function (btn) {

        btn.addEventListener("click", function (e) {

            const category = e.currentTarget.dataset.id;

            if (category === "all") {
                displayMenuItems(menu);
            } else {
                const menuCategory = menu.filter(function (menuItem) {
                    return menuItem.category === category;
                });

                displayMenuItems(menuCategory);
            }

        });

    });

}