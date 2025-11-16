const logo = document.querySelector('.logo');
const buttons = document.querySelectorAll('.homerowbuttons button');
const menuIcon = document.querySelector('.menu-icon');

function resizeButtons(){
    const logoHeight = logo.offsetHeight;
    buttons.forEach(btn => {
        btn.style.height = (logoHeight * 0.5) + 'px';
        btn.style.fontSize = (logoHeight * 0.25) + 'px';
        });

    menuIcon.style.fontSize = (logoHeight * 0.25) + 'px';

    }
window.addEventListener('resize', resizeButtons);
window.addEventListener('load', resizeButtons);


const homepagePhoto = document.querySelector('.container');

window.addEventListener('scroll', () =>  {
    const scrollY = window.scrollY;

    homepagePhoto.style.transform = `translateX(-50%) translateY(${-scrollY * 0.5}px)`;
    });


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
