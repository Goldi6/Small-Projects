const sectionCenter = document.querySelector(".menu-items");
const filterBtns = document.querySelectorAll(".filter-btn");

//load items
window.addEventListener("DOMContentLoaded", function() {
    displayItems(menu);
});
//filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.category;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "all") {
            displayItems(menu);
        } else {
            displayItems(menuCategory);
        }
    });
});

function displayItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        //  console.log(item);

        return `<article class="menu-item">
        <figure>
            <img class="item-img" src="../${item.image}" alt="${item.title}">
            <figcaption>Photo by <a target="_blank" href="${item.authorLink}">${item.authorName}</a> on <a target="_blank" href="${item.WebsiteLink}">${item.WebsiteName}</a>

            </figcaption>
        </figure>

        <header class="item-info">
            <h4>${item.title}</h4>
            <h4>$${item.price}</h4>
        </header>
        <p class="item-desc">
            ${item.desc}
        </p>
    </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}