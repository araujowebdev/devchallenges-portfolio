"use strict";var projectsList=document.querySelectorAll(".projects__list-item"),btnTechs=document.querySelectorAll(".projects__filter div button"),projectCount=document.querySelector(".projects__filter h3 span");btnTechs.forEach(function(t){t.addEventListener("click",function(){btnTechs.forEach(function(t){return t.classList.remove("btn-clicked")}),t.classList.add("btn-clicked");var e=t.textContent.toLowerCase();projectCount.textContent=document.querySelectorAll("."+e).length,projectsList.forEach(function(t){t.style.display="block",t.classList.contains(e)||(t.style.display="none")})})});