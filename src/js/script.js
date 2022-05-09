window.onload = () => {
    mostrarMenuMobile();
}

const mostrarMenuMobile = () => {
    let menuMobile = document.querySelector("#navbar-mobile");

    menuMobile.addEventListener("click", () => {
        let itensMenu = document.querySelector("#lista-navbar");
        itensMenu.classList.toggle("ativo");
    });
}