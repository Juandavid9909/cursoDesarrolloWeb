// Destructuring

const cliente = {
    nombre: "Alejandra",
    tipo: "Premium",
    datos: {
        ubicacion: {
            ciudad: "México",
            pais: "México"
        },
        cuenta: {
            desde: "10-12-2012",
            saldo: 4000
        }
    }
}

console.log(cliente);

// Crear la variable
const nombreCliente = cliente.nombre;

let { nombre, tipo } = cliente;
let { datos: { ubicacion } } = cliente;

console.log(nombre);