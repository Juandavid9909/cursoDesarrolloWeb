// Crear un arreglo

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo");
console.log(meses);

const arreglo = ["Hola", 10, true, "si", null, undefined];
console.log(arreglo.length);

console.log(Array.isArray(arreglo));

meses.push("Abril"); // Agrega al final del arreglo
meses.push("Mayo");
meses.unshift("Mes 0"); // Agrega al inicio del arreglo
meses.pop(); // Elimina del final del arreglo
meses.shift(); // Elimina al inicio del arreglo
meses.splice(0, 2); // Eliminar de un rango del arreglo
meses.reverse();

// Ordenar un arreglo
let frutas = ["Platano", "Manzana", "Fresa", "Naranja"];
frutas.sort();