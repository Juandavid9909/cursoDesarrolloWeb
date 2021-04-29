// Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

console.log(producto);

// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);
// console.log(producto["precio"]);

// Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

// Eliminar propiedades
delete producto.disponible;

console.log(producto);