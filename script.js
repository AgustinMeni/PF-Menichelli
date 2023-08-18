//Función que oculta o muestra el menu
const menuHamburguesa = document.querySelector("#menu-hamburguesa")
const menuIconClose = document.querySelector("#close-icon-menu")
const nav = document.querySelector("#nav")

menuHamburguesa.addEventListener("click", () => {
    if(nav.style.display = "none") {
        console.log('antes', nav.style.display)
        nav.style.display = "flex";
        console.log('despues', nav.style.display)
        menuHamburguesa.setAttribute("class", "bi bi-x-circle");
    } else if(nav.style.display = "none"){
        console.log('antes del segund click', nav.style.display)
        nav.style.display = "flex";
        console.log('despues del segund click', nav.style.display)
        menuHamburguesa.setAttribute("class", "fa-solid fa-bars");
    }
})

menuHamburguesa.addEventListener("click", () => {
    if(nav.style.display = "flex") {
        console.log('antes', nav.style.display)
        nav.style.display = "none";
        console.log('despues', nav.style.display)
        menuHamburguesa.setAttribute("class", "fa-solid fa-bars");
    } else if(nav.style.display = "none") {
        console.log('antes del segund click', nav.style.display)
        nav.style.display = "flex";
        console.log('despues del segund click', nav.style.display)
        menuHamburguesa.setAttribute("class", "bi bi-x-circle");
    }
})
 