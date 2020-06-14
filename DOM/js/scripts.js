(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", function() {
    var viejoNodo = document.querySelector("main h2");
    var nuevoNodo = document.querySelector("footer h2");

    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);

    // Reemplazar nodo con uno nuevo
    var nuevoTitulo = document.createElement("h2");
    var nuevoTexto = document.createTextNode("Hola mundo");

    nuevoTitulo.appendChild(nuevoTexto);

    var viejoNodo = document.querySelector("main h2");
    viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);
  });
})();