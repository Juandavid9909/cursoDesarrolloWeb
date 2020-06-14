const suma = (a = 0, b = 0) => a + b;

const multiplicar = a => {
    return a * 5;
}

let total;
let resultadoSuma = suma(10, 20);

total = multiplicar(resultadoSuma);

console.log(total);

// Arrow Functions

let viajando = (destino) => "Viajando a la ciudad de " + destino;

let viaje;
viaje = viajando("Londres");

console.log(viaje);