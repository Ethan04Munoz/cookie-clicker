//Variables globales
    const imagenGalleta = document.querySelector("#imagenGalleta");
    const puntajeMostrador = document.querySelector("#puntajeMostrador");
    const recordPuntaje = document.querySelector("#recordpuntaje");
    const cajaGOD = document.querySelector("#cajaGOD"); //Obtenemos la caja semitrasparente que almacena 
                                                        //todo el contenido de la página
    let conteoGalletas = 0; //Almacenara el puntaje
    let record = 0;

//Funciones

    //Esta funcion obtiene el record de el localStorage
    function updateRecord(){
        recordPuntaje.textContent = "Record: " + localStorage.getItem("record");
    }

    //Esta funcion aumenta las galletas y actualiza el puntaje
    function aumentarGalletas(){
        conteoGalletas = conteoGalletas + 1;
        puntajeMostrador.textContent = "Puntaje: " + conteoGalletas;
        record = localStorage.getItem("record");
        if(conteoGalletas > record){
            record = conteoGalletas;
            localStorage.setItem("record", record);
            updateRecord();
        }
        creacionGalletaPequeña(); //Invocamos una funcion que creará la animación de la galleta
    }

    //Esta funcion crea el objeto images de la galleta, le da posiciones y clases, pero aun no lo
    //añade al HTML
    function creacionGalletaPequeña(){
        //Variables locales
        let galletaAnimacion = document.createElement("img");   //Creamos un elemento img y lo guardamos
                                                                //en la nueva variable galletaAnimacion

        //Añadimos la ruta de la imagen al elemento creado
        galletaAnimacion.src = "images/+1_2 nb.png"; 
        //Le damos una clase para así poder darle estilos más facilmente           
        galletaAnimacion.className = "imgSmall";

        //En esta seccion se crea la posicion aleatoria de la galleta
            let rightOrleft = Math.ceil(Math.random()*(3-1)+1); //Creamos un numero aleatorio entre 2 y 3
                                                                //Dependiendo del numero entra al if o al else
                                                                //y así crea las posiciones aleatorias
            if (rightOrleft == 2){ //2 es derecha
                let posv = Math.ceil(Math.random() * (20+30) - 30);
                var posvString = posv + 'px';
                galletaAnimacion.style.marginLeft = posvString;
                let posH = Math.ceil(Math.random() * (150-30) + 30);
                var posHString = posH + 'px';

                //Una vez creadas las posiciones random de horizontal y vertical las modifica en los estilos
                galletaAnimacion.style.marginTop = posHString;
            }else{ //3 es izquierda
                let posv = Math.ceil(Math.random() * (400-300) + 300);
                var posvString = "-" + posv + 'px';
                galletaAnimacion.style.marginLeft = posvString;
                let posH = Math.ceil(Math.random() * (150-30) + 30);
                var posHString = posH + 'px';

                //Una vez creadas las posiciones random de horizontal y vertical las modifica en los estilos
                galletaAnimacion.style.marginTop = posHString;
            }   
            addAndDeleteToHTML(galletaAnimacion)
    }

    //Esta funcion añade la galleta al HTML y después de 500 milisegundos la borra
    function addAndDeleteToHTML(galletaAnimacion){
        cajaGOD.appendChild(galletaAnimacion);
        setTimeout(function(){
                galletaAnimacion.remove();
        }, 500);
    }

//Eventos
imagenGalleta.addEventListener("click", aumentarGalletas); //Al hacer click en la imagen de galleta llama a la funcion de aumentar galletas
document.addEventListener("DOMContentLoaded", updateRecord);

