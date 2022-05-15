window.onload = () => {
    mostrarMenuMobile();
}

const mostrarMenuMobile = () => {
    let menuMobile = document.querySelector("#navbar-mobile");

    menuMobile.addEventListener("click", () => {
        let itensMenu = document.querySelector(".section-menu-cabecalho");
        itensMenu.classList.toggle("ativo");
    });
}