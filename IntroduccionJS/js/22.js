// const puntaje = 1000;

// if (puntaje !== 1000) {
//     console.log("No es igual");
// }
// else {
//     console.log("Si el puntaje es 1000");
// }

// const efectivo = 1000;
// const carrito = 800;

// if (efectivo > carrito) {
//     console.log("El usuario puede pagar");
// } else {
//     console.log("Fondos insuficientes");
// }

const rol = "VISITANTE";

if (rol === "ADMINISTRADOR") {
    console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
    console.log("Eres editor, puedes entrar pero no puedes hacer mucho");
} else {
    console.log("No tienes acceso");
}