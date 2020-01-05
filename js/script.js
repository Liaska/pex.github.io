let button = document.querySelector(".search__header");
let zoom = document.querySelector(".search__form");
button.addEventListener("click", function() {
    zoom.classList.remove("active");
});
button.addEventListener("focusout", function() {
    zoom.classList.remove("active");
});
button.addEventListener("focusout", function() { 
        zoom.classList.add('active');
});