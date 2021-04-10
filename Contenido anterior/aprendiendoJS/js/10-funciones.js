// function declaration
function saludar(nombre = "Visitante", trabajo = "No Sabemos!") {
    console.log(`Hola ${ nombre }, tu trabajo es ${ trabajo }`);
}

saludar("Juan", "Desarrollador Web");

// function expression
const suma = function (a, b) {
    console.log(a + b);
}

suma(10, 20);

// IIFE
(function(tecnologia) {
    console.log("AQUI ESTOY!" + teecnologia);
})("JavaScript");