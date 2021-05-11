const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;

    if (auth) {
        resolve("Usuario Autenticado"); // EL PROMISE SE CUMPLE
    } else {
        reject("No se pudo iniciar sesión"); // El promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

console.log(usuarioAutenticado);

// En los Promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Funfilled : Ya se cumplió
// Rejected : Se ha rechazado o no se pudo cumplir