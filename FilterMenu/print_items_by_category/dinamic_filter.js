const sectionCenter = document.querySelector(".menu-items");
const btnsContainer = document.querySelector(".btns");

//sort items by category id
menu.sort(function(a, b) {
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
    if (a.id == b.id) {
        return 0;
    }
});

//load items
window.addEventListener("DOMContentLoaded", function() {
    displayItems(menu);
    displayMenuBtns();
});

//iterate trough categories and ge uniqe items [btns]
const categories = menu.reduce(
    function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]
);

function displayItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item ${item.category}">
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
        //  console.log(item);
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;

    //get all items displayed to add category title
    const allItems = document.querySelectorAll(".menu-item");
    $(
        (function() {
            categories.forEach(function(cat) {
                if ($(".menu-item").hasClass(cat)) {
                    $("." + cat).wrapAll("<div class='grid' id='" + cat + "'></div>");
                    $("#" + cat).before($("<h3 class='categoryTitle'>" + cat + "</h3>"));
                }
            });
        })()
    );
    //set break to titles
    // .last.after

    console.log(allItems);
}

function displayMenuBtns() {
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