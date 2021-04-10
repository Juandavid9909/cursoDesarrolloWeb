(function() {
    'use strict';
  
    document.addEventListener("DOMContentLoaded", function() {
      var enlaces = document.getElementsByTagName("a");
  
      for(let i = 0; i < enlaces.length; i++) {
        enlaces[i].setAttribute("target", "_blank");
      }
  
      var enlacesSidebar = document.getElementById("sidebar").getElementsByTagName("a");
    });
  })();