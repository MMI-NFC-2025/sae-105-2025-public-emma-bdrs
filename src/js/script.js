// src/js/script.js — common behaviors: booking link + mobile menu
const menu = document.getElementById("sideMenu");
document.getElementById("openMenu").onclick = () => {
    menu.classList.add("open");
};
document.getElementById("closeMenu").onclick = () => {
    menu.classList.remove("open");
};
