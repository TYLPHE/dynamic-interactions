(()=>{"use strict";const e={init:n=>{n.appendChild(e.mainMenu())},mainMenu:()=>{const n=document.createElement("div");return n.classList.add("main-menu"),n.appendChild(e.hamburger()),n},hamburger:()=>{const n=document.createElement("div"),t=document.createElement("img");return t.classList.add("hamburger"),t.src="https://openclipart.org/image/2000px/221605",t.addEventListener("click",e.sidebarMenu),n.appendChild(t),n},sidebarMenu:()=>{console.log("TODO: add expand here")}};e.init})();