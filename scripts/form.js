!function(){"use strict";function e(e,n){var r={full:e,"short":n};c.push(r),localStorage.setItem("urls",JSON.stringify(c)),t(r)}function t(e){var t=document.createElement("LI"),n=document.createElement("span"),r=document.createElement("a");n.innerHTML=e.full,r.href=e["short"],r.innerHTML=e["short"],t.appendChild(r),t.appendChild(n),s.insertBefore(t,s.firstChild)}function n(){c=JSON.parse(localStorage.getItem("urls"))||[],c&&0!==c.length&&c.map(function(e){t(e)})}function r(){i.value="Shorten",a.value="",a.select(),o=!1}function l(){n()}var o,u=document.getElementById("form"),a=u.children[0],i=u.children[1],c=[],s=document.getElementById("list");u.onsubmit=function(t){return t.preventDefault(),t.stopPropagation(),o?r():(o=!0,i.setAttribute("disabled","true"),i.value="Generating url..",console.log(a.value),void shorten.url(a.value,function(t,n){var r=a.value;i.removeAttribute("disabled"),i.value="Done! Create another one?",a.value=n,a.select(),e(r,a.value)}))},l()}();