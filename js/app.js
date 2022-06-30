//Variables
const imagenGalleta = document.querySelector("#imagenGalleta");
const puntajeMostrador = document.querySelector("#puntajeMostrador");
let conteoGalletas = 0;
let galletaAnimacion = document.createElement("img");

//Funciones
function aumentarGalletas(){
    conteoGalletas = conteoGalletas + 1;
    puntajeMostrador.textContent = "Puntaje: " + conteoGalletas;
    galletaAnimacion.src = "images/+1_2 nb.png";
    galletaAnimacion.className = "imgSmall";
    /* 
    Esta version ya hace el conteo y añade galleta, falta:
    Guardar en localstorage el record
    Guardar el record y mostrarlo
    hacer que la galleta desaparezca despues de 1 segundo
    hacer que se puedan añadir varias galletas (probablemente necesitaré un arreglo)
    */
    puntajeMostrador.appendChild(galletaAnimacion);
    //console.log(conteoGalletas);
}

//Eventos
imagenGalleta.addEventListener("click", aumentarGalletas);