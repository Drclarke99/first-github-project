function openMenu() {
    //document.body.classList.add("menu--open");
    //document.body.classList.remove("menu--close");
    document.querySelector(".menu__backdrop").classList.add("menu--open");
    document.querySelector('.menu__backdrop').classList.remove("menu--close");
}

function closeMenu() {
    document.body.classList.add("menu--close");
    document.body.classList.remove("menu--open");
    document.querySelector('.menu__backdrop').classList.add("menu--close");
    document.querySelector('.menu__backdrop').classList.remove("menu--open");
}