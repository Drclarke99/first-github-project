const element = document.querySelector('.menu__backdrop');

function openMenu() {
    element.classList.add("menu--open");
    element.classList.remove("menu--close");
}

function closeMenu() {
    element.classList.add("menu--close");
    element.classList.remove("menu--open");
}