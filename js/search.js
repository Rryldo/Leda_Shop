/* SELECT DOM ELEMENTS */
const topSearchInput = document.querySelector(".search-box");
const topSearchBtn = document.querySelector(".HomeLine .search-button");

const sideSearchInput = document.querySelector(".search-box-div");
const sideSearchBtn = document.querySelector(".search-container-div .search-button");

const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");

const genderFilters = document.querySelectorAll('input[name="gender"]');
const typeFilters = document.querySelectorAll('input[name="type"]');
const outletFilter = document.querySelector('input[name="outlet"]');

const applyButton = document.querySelector(".apply-button");

const products = document.querySelectorAll(".entity");


/* HELPER FUNCTIONS */

// Returns selected value of radio buttons
function getSelected(radioNodes) {
    let selected = null;
    radioNodes.forEach(r => {
        if (r.checked) selected = r.value;
    });
    return selected;
}

// Extracts price number from "199,99 €"
function extractPrice(text) {
    return parseFloat(
        text.replace("€", "").replace(",", ".").trim()
    );
}


/* MAIN FILTER FUNCTION */
function filterProducts() {
    
    const searchText = (sideSearchInput.value || topSearchInput.value || "").toLowerCase();

    const min = parseFloat(minPrice.value) || 0;
    const max = parseFloat(maxPrice.value) || Infinity;

    const gender = getSelected(genderFilters);  // "M" / "F"
    const type = getSelected(typeFilters);      // "Sport" / "Casual"
    const outletOnly = outletFilter.checked;    // true / false


    products.forEach(product => {

        const name = product.querySelector(".item_name").textContent.toLowerCase();
        const priceText = product.querySelector(".item_price").textContent;
        const price = extractPrice(priceText);

        let visible = true;


        /* TEXT SEARCH */
        if (searchText && !name.includes(searchText)) {
            visible = false;
        }

        /*PRICE FILTER */
        if (price < min || price > max) {
            visible = false;
        }

        /* GENDER FILTER (if you decide to tag products later) */
        if (gender) {
            if (gender === "M" && !name.includes("m")) visible = false;
            if (gender === "F" && !name.includes("f")) visible = false;
        }

        /* TYPE FILTER  */
        if (type) {
            if (type === "Sport" && !name.includes("sport")) visible = false;
            if (type === "Casual" && !name.includes("casual")) visible = false;
        }

        /*  OUTLET FILTER  */
        if (outletOnly) {
            if (!name.includes("outlet")) visible = false;
        }

        /* APPLY VISIBILITY  */
        product.style.display = visible ? "block" : "none";
    });
}


/* EVENT LISTENERS*/

// Search with header search bar
topSearchBtn.addEventListener("click", filterProducts);
topSearchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") filterProducts();
});

// Search with left search bar
sideSearchBtn.addEventListener("click", filterProducts);
sideSearchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") filterProducts();
});

// Filters update the results automatically
genderFilters.forEach(r => r.addEventListener("change", filterProducts));
typeFilters.forEach(r => r.addEventListener("change", filterProducts));
outletFilter.addEventListener("change", filterProducts);

minPrice.addEventListener("input", filterProducts);
maxPrice.addEventListener("input", filterProducts);

// "Apply" button also triggers filtering
applyButton.addEventListener("click", e => {
    e.preventDefault(); // stops reload
    filterProducts();
});
