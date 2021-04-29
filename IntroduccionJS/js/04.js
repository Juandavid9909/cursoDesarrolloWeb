// String o Cadenas de Texto
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
// const producto2 = String("Monitor 30 Pulgadas");
// const producto3 = new String("Monitor 50 Pulgadas");
const producto2 = 'Monitor HD"';

console.log(tweet.length);
console.log(producto2);

// IndexOf (retorna posición)
console.log(tweet.indexOf("JavaScript"));
console.log(producto2.indexOf("Tablet"));

// Include (retorna true o false)
console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));