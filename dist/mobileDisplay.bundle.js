(()=>{"use strict";const e={init:t=>{t.appendChild(e.mainMenu())},mainMenu:()=>{const t=document.createElement("div");return t.classList.add("main-menu-div"),t.appendChild(e.hamburger()),t},hamburger:()=>{const t=document.createElement("div");t.classList.add("hamburger-div");const d=document.createElement("img");return d.classList.add("hamburger-icon"),d.src="https://openclipart.org/image/2000px/221605",d.addEventListener("click",e.openSidebar),t.appendChild(d),t},openedSidebar:!1,openSidebar:()=>{if(!1===e.openedSidebar){const t=document.createElement("div");t.append(e.sidebarList(e.menuList)),t.classList.add("sidebar-div"),setTimeout((()=>{t.classList.add("slide-in")}),1),e.openedSidebar=!0;const d=document.querySelector(".body-div");return d.appendChild(t),void d.addEventListener("click",e.outsideSidebar)}e.closeSidebar()},closeSidebar:()=>{const t=document.querySelector(".sidebar-div");t.classList.remove("slide-in");const d=document.querySelector(".body-div");d.removeEventListener("click",e.test),e.openedSidebar=!1,setTimeout((()=>{d.removeChild(t)}),150)},outsideSidebar:t=>{const d=t.target.classList[0];e.openedSidebar&&"sidebar-div"!==d&&"hamburger-icon"!==d&&e.closeSidebar()},menuList:["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5","Menu 6"],sidebarList:e=>{const t=document.createElement("div");t.classList.add("sidebar-menu-list");for(let d=0;d<e.length;d+=1){const i=document.createElement("div");i.classList.add("sidebar-list"),i.textContent=e[d],t.appendChild(i)}return t}};e.init})();