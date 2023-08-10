let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("microsoft");
        habilidades[1].classList.add("power");
        habilidades[2].classList.add("workspace");
        habilidades[3].classList.add("google");
        habilidades[4].classList.add("looker");
        habilidades[5].classList.add("sql");
        habilidades[6].classList.add("htmlcss");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("equipo");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("analitica");
        habilidades[11].classList.add("gestion");
        habilidades[12].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Al final del archivo "script.js"
const contenidoDiv = document.getElementById('contenido-dinamico');

function cargarSobreMi() {
  fetch('sobreMi.html')
    .then(response => response.text())
    .then(data => contenidoDiv.innerHTML = data)
    .catch(error => console.error('Error al cargar el contenido: ', error));
}