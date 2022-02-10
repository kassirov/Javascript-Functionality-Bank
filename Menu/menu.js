const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./products/buttermilk-pancakes.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "./products/diner-double.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "./products/godzilla-milkshake.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "./products/country-delight.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "./products/egg-attack.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "./products/oreo-dream.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "./products/bacon-overflow.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "./products/american-classic.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: "./products/quarantine-buddy.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    img: "./products/steak-dinner.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

//Load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

//Filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <img
          src=${item.img}
          class="photo"
          alt=${item.title}
        />
        <div class="item-info">
          <header class="header">
            <h4 class="item-title">${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit praesentium cumque error nemo cupiditate iusto earum
            recusandae repudiandae accusamus animi!
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
