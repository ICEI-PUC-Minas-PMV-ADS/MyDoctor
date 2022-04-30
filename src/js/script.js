window.onload = () => {
    showMenuMobile();
}

const showMenuMobile = () => {
    let menuMobile = document.querySelector("#navbar-mobile");

    menuMobile.addEventListener("click", () => {
        let itemsMenu = document.querySelector("#list-navbar");
        itemsMenu.classList.toggle("ativo");
    });
}