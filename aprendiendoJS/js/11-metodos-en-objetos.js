// Métodos
const musica = {
    reproducir: function(cancion) {
        console.log("Reproduciendo la canción: " + cancion);
    },
    pausar: function() {
        console.log("Paused...");
    }
}

// Los métodos también pueden ir por fuera
musica.borrar = function(id) {
    console.log(`Borrando la canción con el ID: ${ id }`);
}

musica.reproducir("Hotel California");
musica.pausar();
musica.reproducir("Enter Sandman");
musica.borrar(121);