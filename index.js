const elements = document.querySelector('.menu__backdrop');
const list = elements.classList;

function openMenu() {
    list.add("menu--open");
    list.remove("menu--close");
}

function closeMenu() {
    list.add("menu--close");
    list.remove("menu--open");
}

/*function openMenu() {
    element.classList += " menu--open";
    element.classList.remove("menu--close");
}

function closeMenu() {
    element.classList.add("menu--close");
    element.classList.remove("menu--open");
}*/