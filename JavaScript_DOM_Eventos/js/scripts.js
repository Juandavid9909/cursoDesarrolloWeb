// querySelector
const heading = document.querySelector(".header__texto h2");
heading.textContent = "Nuevo Heading";
// heading.classList.add("nueva-clase");
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces[0]);

enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].href = "https://google.com";
// enlaces[0].classList.remove("navegacion__enlace");

// getElementById
const heading2 = document.getElementById("heading");
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

// Agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";

// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

// Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos
console.log(1);

window.onload = function() {
    console.log(3);
}

window.addEventListener("load", () => imprimir()); // espera a que el js y los archivos que dpenden del HTML estén listos

document.addEventListener("DOMContentLoaded", () => { // Sólo espera por el HTML, no espera CSS ni imagenes
    console.log(4);
})

console.log(5);

function imprimir() {
    console.log(2);
}

window.onscroll = function() {
    console.log("scrolling...");
}

// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector(".boton--primario");

// btnEnviar.addEventListener("click", e => {
//     e.preventDefault();

//     // Validar un formulario
//     console.log("Enviando formulario...");
// });

// Eventos de los Inputs y Textarea
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

// input lee cada letra, change espera hasta que quite el focus
nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// El evento de submit
formulario.addEventListener("submit", e => {
    e.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", "error");
        return;
    }

    // Crear la otra alerta de enviar el formulario
    mostrarAlerta("Mensaje enviado correctamente");
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);

    // Desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}