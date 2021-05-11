// POO

// Object Literal
const producto = {
    nombre: "Tablet",
    precio: 500
};

// Prototype: Crear funciones que solo se utilizan en un objeto en específico
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${ this.nombre } ${ this.apellido }`;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

// Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Prototype: Crear funciones que solo se utilizan en un objeto en específico
Producto.prototype.formatearProducto = function() {
    return `El Producto ${ this.nombre } tiene un precio de: $${ this.precio }`;
}

const producto2 = new Producto("Monitor Curvo de 49\"", 800);
const producto3 = new Producto("Laptop", 300);

const cliente = new Cliente("Juan", "David");

console.log(cliente);

// function formatearProducto(producto) {
//     return `El producto ${ producto.nombre } tiene un precio de: $${ producto.precio }`;
// }

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());