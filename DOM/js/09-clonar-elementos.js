(function() {
    'use strict';
  
    document.addEventListener("DOMContentLoaded", function() {
      var contenido = document.querySelectorAll("main");
      var nuevoContenido = contenido[0].cloneNode(true);
  
      var sidebar = document.querySelector("aside");
  
      sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);
    });
  })();