// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");
console.table(meses);

// const arreglo = ["Hola", 10, true, "si", null, { nombre: "Juan", trabajo: "Programador" },
//     [1, 2, 3]
// ];
// console.table(arreglo);

// Acceder a los valores de un arreglo
// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[200]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero) {
//     console.log(numero);
// });

// Agregar datos al final del arreglo
numeros.push(60, 70, 80);

// Agregar datos al inicio del arreglo
numeros.unshift(-10, -20, -30);

console.table(numeros);

// Eliminar el último elemento de, arreg,k
// meses.pop();

// Eliminar el primer elemento del arreglo
// meses.shift();

// Eliminar posición específica
meses.splice(2, 1);

console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, "Junio"];
console.log(nuevoArreglo);