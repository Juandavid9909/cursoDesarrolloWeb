'use strict'; // Correr JS en modo estricto

// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

// No permitir agregar más propiedades a un objeto
// Object.freeze(producto); // No permite agregar, eliminar ni modificar
Object.seal(producto); // Permite modificar pero no agregar ni eliminar

// producto.imagen = "imagen.jpg";

// Verificar si no se pueden agregar datos
// console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

console.log(producto);