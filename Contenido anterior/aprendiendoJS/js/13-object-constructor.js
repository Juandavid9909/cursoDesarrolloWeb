// Object Literal

const persona = {
    nombre: "Juan",
    edad: 80,
    anioNacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona.anioNacimiento());

class Tarea {
    constructor(nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}

// Crear nuevas tareas
const tarea1 = new Tarea("Aprender JavaScript", "Urgente");

console.log(tarea1);