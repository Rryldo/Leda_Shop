const searchInput = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-button');

function performSearch() {
    const query = searchInput.value.trim();
    if(query) {
        window.location.href = "search.html";
    }
}

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "search.html";
});

searchInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        performSearch();
    }
});



const iconLeft = document.querySelector(".iconLeft");
const iconRight = document.querySelector(".iconRight");

console.log(iconLeft);
console.log(iconRight);

iconLeft.addEventListener("click", (e) => {
    console.log("Left clicked");
    console.log(e.currentTarget);
    handleScreenshotControls("left", e.currentTarget);
});
iconRight.addEventListener("click", (e) => {
    console.log("Right clicked");
    console.log(e.currentTarget);
    handleScreenshotControls("right", e.currentTarget);
});


function handleScreenshotControls(direction, el) {
    const offset = direction === "left" ? 1 : -1;
    const screenshots = el.closest(".container");
    if (!screenshots) return;
    console.log("first if");
    let val = parseInt(
        window.getComputedStyle(screenshots).getPropertyValue("--i").trim()
    );
    if (isNaN(val)) val = 0;
    if (val + offset > 0 || (val + offset) * -1 >= screenshots.children.length -2 ){
        return;
    }

    screenshots.style.setProperty("--i", val + offset);
}