async function obtenerEmpleados() {
    const archivo = "empleados.json";
    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then(datos => {
    //         const { empleados } = datos;
    //         // console.log(empleados);

    //         empleados.forEach(empleado => console.log(empleado));
    //     });

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();