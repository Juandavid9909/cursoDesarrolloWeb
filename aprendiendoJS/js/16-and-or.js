let dinero = 300;
let totalCarrito = 500;
let tarjeta = false;

if(dinero > totalCarrito || tarjeta) {
    console.log("Pago Correcto");
}
// else if(tarjeta) {
//     console.log("Pagaste con tarjeta");
// }
else {
    console.log("Fondos insuficientes");
}

let hora = 8;

if(hora > 0 && hora <= 12) {
    console.log("Buenos días");
}
else if(hora > 12 && hora <= 18) {
    console.log("Buenas tardes");
}
else if(hora > 18 && hora <= 24) {
    console.log("Buenas noches");
}
else {
    console.log("Horario no válido");
}