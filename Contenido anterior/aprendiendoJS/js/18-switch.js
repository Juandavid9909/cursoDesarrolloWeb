// Switch statement

const metodoPago = "cheque";

switch(metodoPago) {
    case "efectivo":
        console.log(`Pagaste con ${ metodoPago }`);
        hola();
        break;

    case "cheque":
        console.log(`Pagaste con ${ metodoPago }, revisaremos que tenga fondos`);
        break;

    case "tarjeta":
        console.log(`Pagaste con ${ metodoPago }, espere un momento...`);
        break;

    default:
        console.log("Aún no has pagado o método no válido");
        break;
}

function hola() {
    console.log("Hola amigos");
}