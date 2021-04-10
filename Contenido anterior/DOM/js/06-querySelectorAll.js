(function() {
    'use strict';
  
    document.addEventListener("DOMContentLoaded", function() {
      var enlace = document.querySelectorAll("a");
  
      for(var i = 0; i < enlace.length; i++) {
        console.log(enlace[i]);
      }
    });
  })();