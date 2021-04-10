const carrito = ["producto 1", "producto 2", "producto 3"];

// For Loop
for(let i = 0; i < carrito.length; i++) {
    console.log(`Producto en el carrito: ${ carrito[i] }`);
}

// While loop
let i = 0;

while(i < carrito.length) {
    console.log(carrito[i]);
    i++;
}

do {
    console.log(i);
    i++;
}while(i < 10);