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

    // Almacena el nombre de la cita en el objeto
    nombreCita();

    // Almacena la fecha de la cita en el objeto
    fechaCita();

    // Deshabilita días pasados
    deshabilitarFechaAnterior();

    // Almacena la hora de la cita en el objeto
    horaCita();
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

        mostrarResumen();
    }

    mostrarSeccion(); // Cambia la sección que se muestra por la de la página
}

function mostrarResumen() {
    // Destructuring
    const { nombre, fecha, hora, servicios } = cita;

    // Seleccionar el resumen
    const resumenDiv = document.querySelector(".contenido-resumen");

    // Limpia el HTML previo
    while (resumenDiv.firstChild) {
        resumenDiv.removeChild(resumenDiv.firstChild);
    }

    // Validación de objeto
    if (Object.values(cita).includes("")) {
        const noServicios = document.createElement("P");
        noServicios.textContent = "Faltan datos de servicios, hora, fecha o nombre";

        noServicios.classList.add("invalidar-cita");

        // Agregar a resumen Div
        resumenDiv.appendChild(noServicios);

        return;
    }

    const headingCita = document.createElement("H3");
    headingCita.textContent = "Resumen de Cita";

    // Mostrar el resumen
    const nombreCita = document.createElement("P");
    nombreCita.innerHTML = `<span>Nombre:</span> ${ nombre }`;

    const fechaCita = document.createElement("P");
    fechaCita.innerHTML = `<span>Fecha:</span> ${ fecha }`;

    const horaCita = document.createElement("P");
    horaCita.innerHTML = `<span>Nombre:</span> ${ hora }`;

    const serviciosCita = document.createElement("DIV");
    serviciosCita.classList.add("resumen-servicios");

    const headingServicios = document.createElement("H3");
    headingServicios.textContent = "Resumen de Servicios";

    serviciosCita.appendChild(headingServicios);

    let cantidad = 0;

    // Iterar sobre el arreglo de servicios
    servicios.forEach(servicio => {
        const { nombre, precio } = servicio;

        const contenedorServicio = document.createElement("DIV");
        contenedorServicio.classList.add("contenedor-servicio");

        const textoServicio = document.createElement("P");
        textoServicio.textContent = nombre;

        const precioServicio = document.createElement("P");
        precioServicio.textContent = precio;
        precioServicio.classList.add("precio");

        const totalServicio = precio.split("$");

        cantidad += parseInt(totalServicio[1].trim());

        // Colocar texto y precio en el div
        contenedorServicio.appendChild(textoServicio);
        contenedorServicio.appendChild(precioServicio);

        serviciosCita.appendChild(contenedorServicio);
    });

    resumenDiv.appendChild(headingCita);

    resumenDiv.appendChild(nombreCita);
    resumenDiv.appendChild(fechaCita);
    resumenDiv.appendChild(horaCita);

    resumenDiv.appendChild(serviciosCita);

    const cantidadPagar = document.createElement("P");
    cantidadPagar.classList.add("total");
    cantidadPagar.innerHTML = `<span>Total a pagar: </span>$ ${ cantidad }`;

    resumenDiv.appendChild(cantidadPagar);
}

function nombreCita() {
    const nombreInput = document.querySelector("#nombre");

    nombreInput.addEventListener("input", e => {
        const nombreTexto = e.target.value.trim();

        // Validación de que nombreTexto debe tener algo
        if (nombreTexto === "" || nombreTexto.length < 3) {
            mostrarAlerta("Nombre no válido", "error");
        } else {
            const alerta = document.querySelector(".alerta");

            if (alerta) {
                alerta.remove();
            }

            cita.nombre = nombreTexto;
        }
    });
}

function mostrarAlerta(mensaje, tipo) {
    // Si hay una alerta previa, entonces no crear otra
    const alertaPrevia = document.querySelector(".alerta");

    if (alertaPrevia) {
        return;
    }

    const alerta = document.createElement("DIV");
    alerta.textContent = mensaje;
    alerta.classList.add("alerta");

    if (tipo === "error") {
        alerta.classList.add("error");
    }

    // Insertar en el HTML
    const formulario = document.querySelector(".formulario");
    formulario.appendChild(alerta);

    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function fechaCita() {
    const fechaInput = document.querySelector("#fecha");
    fechaInput.addEventListener("input", e => {
        const dia = new Date(e.target.value).getUTCDate();

        if ([0].includes(dia)) {
            e.preventDefault();
            fechaInput.value = "";
            mostrarAlerta("Fines de semana no son permitidos", "error");
        } else {
            cita.fecha = fechaInput.value;
        }

        // const opciones = {
        //     weekday: "long",
        //     year: "numeric",
        //     month: "long"
        // };
    });
}

function deshabilitarFechaAnterior() {
    const inputFecha = document.querySelector("#fecha");

    const fechaAhora = new Date();
    const year = fechaAhora.getFullYear();
    const mes = fechaAhora.getMonth() + 1;
    const dia = fechaAhora.getDate() + 1;

    // Formato deseado: AAAA-MM-DD
    const fechaDeshabilitar = `${ year }-${ mes < 10 ? `0${ mes }` : mes }-${ dia }`;

    inputFecha.min = fechaDeshabilitar;
}

function horaCita() {
    const inputHora = document.querySelector("#hora");
    inputHora.addEventListener("input", e => {
        const horaCita = e.target.value;
        const hora = horaCita.split(":");

        if(hora[0] < 10 || hora[0] > 18) {
            mostrarAlerta("Hora no válida", "error");
            
            setTimeout(() => {
                inputHora.value = "";
            }, 3000);
        }
        else {
            cita.hora = horaCita;
        }
    });
}