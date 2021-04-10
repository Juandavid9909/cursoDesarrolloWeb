(function() {
    'use strict';
  
    document.addEventListener("DOMContentLoaded", function() {
      var primerPost = document.querySelector("main article");
  
      primerPost.parentNode.removeChild(primerPost);
  
      var enlaces = document.querySelectorAll("#navegacion nav ul li a")[10];
  
      enlaces.parentNode.removeChild(enlaces);
    });
  })();