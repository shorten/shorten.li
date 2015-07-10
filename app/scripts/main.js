/* jshint devel:true */
"use strict";

document.body.classList.add('loaded');

window.onbeforeunload = function(e) {
  document.body.style.opacity = 0;
};