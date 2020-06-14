const diaHoy = new Date();

let valor = diaHoy;
// Retorna el número del mes = 0 = Enero
valor = diaHoy.getMonth() + 1;
// Retorna el número del día: 0 = Domingo
valor = diaHoy.getDay();
// Retorna el número del día del mes
valor = diaHoy.getDate();
// Año actual
valor = diaHoy.getFullYear();
// Minutos de la hora
valor = diaHoy.getMinutes();
// Las horas del día
valor = diaHoy.getHours();
// Timestamp
valor = diaHoy.getTime();

// New date es igual a mes, día y año
const unDia = new Date("1-5-1987");

valor = unDia;

console.log(valor);