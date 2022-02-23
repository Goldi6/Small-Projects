const sectionCenter = document.querySelector(".menu-items");
const btnsContainer = document.querySelector(".btns");

//load items
window.addEventListener("DOMContentLoaded", function() {
    displayItems(menu);
    displayMenuBtns();
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

function displayMenuBtns() {
    //iterate trough categories and ge uniqe items [btns]
    const categories = menu.reduce(
        function(values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );

    const categoryBtns = categories
        .map(function(category) {
            return ` <button type="button" class="filter-btn" data-category="${category}">${category}</button>`;
        })
        .join("");
    btnsContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

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
}