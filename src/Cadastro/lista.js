window.onload = () => {
    mostrarMenuMobile();
  }
  
  const mostrarMenuMobile = () => {
    let menuMobile = document.querySelector("#navbar-mobile");
  
    menuMobile.addEventListener("click", () => {
        let itensMenu = document.querySelector(".secao2");
        itensMenu.classList.toggle("ativo");
    });
  }
  