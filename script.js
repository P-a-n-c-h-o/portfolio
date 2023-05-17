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
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


const el = document.getElementById("JavaScript")
const height = el.clientHeight
const width = el.clientWidth



el.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width / 2) / width
    )*20

    const xRotation = (
        (layerY - height / 2) / height
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el.style.transform = string
})

el.addEventListener("mouseout", () => {
    el.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})

//skill 
const el1 = document.getElementById("Html")
const height1 = el1.clientHeight
const width1 = el1.clientWidth



el1.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width1 / 2) / width1
    )*20

    const xRotation = (
        (layerY - height1 / 2) / height1
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el1.style.transform = string
})

el1.addEventListener("mouseout", () => {
    el1.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})
//skill 2
const el2 = document.getElementById("Css")
const height2 = el2.clientHeight
const width2 = el2.clientWidth



el2.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width2 / 2) / width2
    )*20

    const xRotation = (
        (layerY - height2 / 2) / height2
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el2.style.transform = string
})

el2.addEventListener("mouseout", () => {
    el2.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})

//skill 3
const el3 = document.getElementById("React")
const height3 = el3.clientHeight
const width3 = el3.clientWidth



el3.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width3 / 2) / width3
    )*20

    const xRotation = (
        (layerY - height3 / 2) / height3
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el3.style.transform = string
})

el3.addEventListener("mouseout", () => {
    el3.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})

//skill 4
const el4 = document.getElementById("MySql")
const height4 = el4.clientHeight
const width4 = el4.clientWidth



el4.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width4 / 2) / width4
    )*20

    const xRotation = (
        (layerY - height4 / 2) / height4
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el4.style.transform = string
})

el4.addEventListener("mouseout", () => {
    el4.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})

//skill 5
const el5 = document.getElementById("Ruby")
const height5 = el5.clientHeight
const width5 = el5.clientWidth



el5.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width5 / 2) / width5
    )*20

    const xRotation = (
        (layerY - height5 / 2) / height5
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el5.style.transform = string
})

el5.addEventListener("mouseout", () => {
    el5.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})

//skill 6
const el6 = document.getElementById("MongoDb")
const height6= el6.clientHeight
const width6 = el6.clientWidth



el6.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width6 / 2) / width6
    )*20

    const xRotation = (
        (layerY - height6 / 2) / height6
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el6.style.transform = string
})

el6.addEventListener("mouseout", () => {
    el6.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})

//skill 7
const el7 = document.getElementById("Java")
const height7= el7.clientHeight
const width7 = el7.clientWidth



el7.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width7 / 2) / width7
    )*20

    const xRotation = (
        (layerY - height7 / 2) / height7
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el7.style.transform = string
})

el7.addEventListener("mouseout", () => {
    el7.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})

//skill 8
const el8 = document.getElementById("Cpp")
const height8= el8.clientHeight
const width8 = el8.clientWidth



el8.addEventListener("mousemove", (evt) => {
    const{layerX, layerY} = evt

    const yRotation = (
        (layerX - width8 / 2) / width8
    )*20

    const xRotation = (
        (layerY - height8 / 2) / height8
    )*20

    const string =`
        perspective(500px)
        scale(1.1)
        rotate(${xRotation}deg)
        rotate(${yRotation}deg)`
    el8.style.transform = string
})

el8.addEventListener("mouseout", () => {
    el8.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})