// Un arreglo
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

// Un arreglo con objetos
const carrito = [
    {
        id: 1,
        producto: "Libro"
    },
    {
        id: 2,
        producto: "Camisa"
    },
    {
        id: 3,
        producto: "Disco"
    }
]

// Un objeto
let automovil = {
    modelo: "Camaro",
    motor: 6.0,
    anio: 1967,
    marca: "Chevrolet"
}

// for(let i = 0; i < pendientes.length; i++) {
//     console.log(pendientes[i]);
// }

for(pendiente of pendientes) {
    console.log(pendiente);
}

for(info of Object.values(automovil)) {
    console.log(info);
}

pendientes.forEach(pendiente => { // NO crea copia de la arreglo
    console.log(pendiente);
});

Object.values(automovil).forEach(info => {
    console.log(info);
});

pendientes.map(tarea => { // Crea copia del arreglo
    console.log(tarea);
});