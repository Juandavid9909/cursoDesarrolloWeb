(function() {
    'use strict';
  
    document.addEventListener("DOMContentLoaded", function() {
      var enlaces = document.querySelectorAll("#menu ul li a")[0];
      console.log(enlaces.nodeType);
      console.log(enlaces.nodeName);
      console.log(enlaces.attributes);
      console.log(enlaces.firstChild);
      console.log(enlaces.firstChild.nodeValue);
  
      enlaces.firstChild.nodeValue = "home";
    });
  })();