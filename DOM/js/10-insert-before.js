(function() {
    'use strict';
  
    document.addEventListener("DOMContentLoaded", function() {
      var sidebar = document.querySelector("aside");
  
      var masVisitados = document.createElement("h2");
      var textoVisitados = document.createTextNode("Post más visitados");
      masVisitados.appendChild(textoVisitados);
      sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);
  
      var contenido = document.querySelectorAll("main h2");
  
      for(var i = 0; i < contenido.length; i++) {
        var nuevoElemento = document.createElement("li");
        var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
        nuevoElemento.appendChild(nuevoTexto);
        sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
      }
    });
  })();