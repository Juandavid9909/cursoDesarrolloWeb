// This

const reservacion = {
    nombre: "Juan",
    apellido: "David",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${ this.nombre } reservó y su cantidad a pagar es de ${ this.total }`);
    }
};

// Arrow function apunta a la ventana global

const reservacion2 = {
    nombre: "Juan",
    apellido: "David",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${ reservacion2.nombre } reservó y su cantidad a pagar es de ${ reservacion2.total }`);
    }
};

reservacion.informacion();