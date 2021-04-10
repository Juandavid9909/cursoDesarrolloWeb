let aprendiendo = "Aprendiendo",
    tecnologia = "JavaScript";

console.log(`${ aprendiendo } ${ tecnologia }`);



let banda = "Metallica",
    cancion = "Enter Sandman";

let nombre;

nombre = banda + ": " + cancion;

console.log(banda.length);

// concat
nombre = nombre.concat(" ", "y es genial");

// Todas mayusculas
nombre = nombre.toUpperCase();

// Todas minúsculas
nombre = nombre.toLowerCase();

console.log(nombre);



// Split va a dividir una cadena de texto
let actividad = "Estoy aprendiendo JavaScript con el curso";

nombre = actividad.split(" ");

let intereses = "Leer, caminar, escuchar música, escribir, aprender a programar";

nombre = intereses.split(", ");

console.log(nombre);


// Reemplazar un valor
let actividad = "Estoy aprendiendo JavaScript con el curso";

nombre = actividad.split(" ");

// Reemplaza un valor
nombre = actividad.replace("JavaScript", "JS");

// Includes revisa que algo exista
nombre = actividad.includes("JavaScript");

console.log(nombre);

let master = "Master ",
    puppets = "Of Puppets";

console.log(master.repeat(3));
console.log(puppets);