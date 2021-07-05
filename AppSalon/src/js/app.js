let pagina = 1;

const cita = {
    nombre: "",
    fecha: "",
    hora: "",
    servicios: []
};

document.addEventListener("DOMContentLoaded", function() {
    iniciarApp();
});

function iniciarApp() {
    mostrarServicios();

    // Restalda el Div Actual segun el tab al que se presiona
    mostrarSeccion();

    // Oculta o muestra una sección según el tab al que se presiona
    cambiarSeccion();

    // Paginación siguiente y anterior
    paginaSiguiente();

    paginaAnterior();

    // Comprueba la página actual para ocultar o mostrar la paginación
    botonesPaginador();

    // Muestra el resumen de la cita o mensaje de error en caso de no pasar la validación
    mostrarResumen();
}

function mostrarSeccion() {
    // Eliminar mostrar-seccion de la sección anterior
    const seccionAnterior = document.querySelector(".mostrar-seccion");

    if (seccionAnterior) {
        seccionAnterior.classList.remove("mostrar-seccion")
    }

    const seccionActual = document.querySelector(`#paso-${ pagina }`);
    seccionActual.classList.add("mostrar-seccion");

    // Eliminar la clase actual en el tab anterior
    const tabAnterior = document.querySelector(".tabs .actual");

    if (tabAnterior) {
        tabAnterior.classList.remove("actual");
    }

    // Resalta el Tab Actual
    const tab = document.querySelector(`[data-paso="${ pagina }"]`);
    tab.classList.add("actual");
}

function cambiarSeccion() {
    const enlaces = document.querySelectorAll(".tabs button");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", e => {
            e.preventDefault();

            pagina = parseInt(e.target.dataset.paso);

            // Llamar la función de mostrar sección
            mostrarSeccion();

            botonesPaginador();
        });
    });
}

async function mostrarServicios() {
    try {
        const resultado = await fetch("./servicios.json");
        const db = await resultado.json();

        const { servicios } = db;

        // Generar el HTML
        servicios.forEach(servicio => {
            const { id, nombre, precio } = servicio;

            // DOM Scripting
            // Generar nombre de servicio
            const nombreServicio = document.createElement("P");
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add("nombre-servicio");

            // Generar el precio del servicio
            const precioServicio = document.createElement("P");
            precioServicio.textContent = `$ ${ precio }`;
            precioServicio.classList.add("precio-servicio");

            // Generar div contenedor de servicio
            const servicioDiv = document.createElement("DIV");
            servicioDiv.classList.add("servicio");
            servicioDiv.dataset.idServicio = id;

            // Selecciona un servicio para la cita
            servicioDiv.onclick = seleccionarServicio;

            // Inyectar precio y nombre al div de servicio
            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);

            // Inyectar en el HTML
            document.querySelector("#servicios").appendChild(servicioDiv);
        });
    } catch (error) {
        console.log(error);
    }
}

function seleccionarServicio(e) {
    // Forzar que el elemento al cual le damos click sea el DIV
    let elemento = e.target.tagName === "P" ? e.target.parentElement : e.target;

    if (elemento.classList.contains("seleccionado")) {
        elemento.classList.remove("seleccionado");

        const id = parseInt(elemento.dataset.idServicio);

        eliminarServicio(id);
    } else {
        elemento.classList.add("seleccionado");

        const servicioObj = {
            id: parseInt(elemento.dataset.idServicio),
            nombre: elemento.firstElementChild.textContent,
            precio: elemento.firstElementChild.nextElementSibling.textContent
        };

        agregarServicio(servicioObj);
    }
}

function eliminarServicio(id) {
    const { servicios } = cita;

    cita.servicios = servicios.filter(servicio => servicio.id !== id);
}

function agregarServicio(servicioObj) {
    const { servicios } = cita;

    cita.servicios = [...servicios, servicioObj];
}

function paginaSiguiente() {
    const paginaSiguiente = document.querySelector("#siguiente");

    paginaSiguiente.addEventListener("click", () => {
        pagina++;

        botonesPaginador();
    });
}

function paginaAnterior() {
    const paginaAnterior = document.querySelector("#anterior");

    paginaAnterior.addEventListener("click", () => {
        pagina--;

        botonesPaginador();
    });
}

function botonesPaginador() {
    const paginaSiguiente = document.querySelector("#siguiente");
    const paginaAnterior = document.querySelector("#anterior");

    if (pagina === 1) {
        paginaAnterior.classList.add("ocultar");
        paginaSiguiente.classList.remove("ocultar");
    } else if (pagina === 2) {
        paginaAnterior.classList.remove("ocultar");
        paginaSiguiente.classList.remove("ocultar");
    } else if (pagina === 3) {
        paginaAnterior.classList.remove("ocultar");
        paginaSiguiente.classList.add("ocultar");
    }

    mostrarSeccion(); // Cambia la sección que se muestra por la de la página
}

function mostrarResumen() {
    // Destructuring
    const { nombre, fecha, hora, servicios } = cita;

    // Seleccionar el resumen
    const resumenDiv = document.querySelector(".contenido-resumen");

    // Validación de objeto
    if (Object.values(cita).includes("")) {
        const noServicios = document.createElement("P");
        noServicios.textContent = "Faltan datos de servicios, hora, fecha o nombre";

        noServicios.classList.add("invalidar-cita");

        // Agregar a resumen Div
        resumenDiv.appendChild(noServicios);
    }
}