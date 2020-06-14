(function() {
    'use strict';
  
    document.addEventListener("DOMContentLoaded", function() {
      var enlacesSidebar = document.querySelectorAll("#sidebar ul");
      var nuevoEnlace = document.createElement("a");
      nuevoEnlace.setAttribute("href", "#");
  
      var textoEnlace = document.createTextNode("Entrada 6");
      nuevoEnlace.appendChild(textoEnlace);
  
      var nuevaLista = document.createElement("li");
      nuevaLista.appendChild(nuevoEnlace);
  
      enlacesSidebar[0].appendChild(nuevaLista);
    });
  })();