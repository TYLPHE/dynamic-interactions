(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(81),r=n.n(i),a=n(645),o=n.n(a)()(r());o.push([e.id,"body {\n  margin: 0;\n  background-color: rgb(0, 0, 0);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nh1 {\n  text-align: center;\n  font-size: 1.5rem;\n}\na {\n  color: cyan;\n}\nh1,\np,\nul,\na {\n  margin: .5rem\n}\nimg {\n  user-select: none;\n}\n\n/* about CSS */\n.about-div {\n  border: 1px solid white;\n  border-radius: 10px;\n  padding: .5rem;\n  margin: .5rem;\n  background-color: rgba(255, 255, 255, 0.137);\n}\n\n/* title CSS */\n.avatar {\n  border-radius: 50%;\n  height: 2rem;\n  border: 1px solid 190b30cb;\n}\n.title-div {\n  font-weight: 900;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.1rem;\n  margin: 0.5rem;\n  min-width: 16rem;\n  text-align: center;\n  font-size: 1.7rem;\n  text-decoration: none;\n  color: inherit;\n  transition: 100ms;\n}\n.title:hover {\n  font-weight: 900;\n  background-color: rgba(0, 0, 0, 0.15);\n  font-size: 1.8rem;\n  transition: 100ms;\n}\n.title-text {\n  padding-top: 0.25rem;\n}\n\n/* cell phone CSS */\n.body-div {\n  color: black;\n  background-color: rgb(231, 225, 251);\n  width: 428px;\n  height: 926px;\n  border: 12px double black;\n  border-radius: 10px;\n  margin: 1rem;\n  overflow: hidden;\n  user-select: none;\n}\n\n/* menu CSS */\n.hamburger-icon {\n  height: 2rem;\n  padding: .5rem;\n}\n.main-menu-title {\n  font-size: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.top-flex {\n  display: flex;\n}\n.bot-flex-child {\n  display: flex;\n  justify-content: space-evenly;\n}\n.left,\n.center,\n.right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  width: 100%;\n  border: 1px solid black;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.left:hover,\n.center:hover,\n.right:hover {\n  font-weight: bold;\n}\n\n/* sidebar CSS */\n.sidebar-div {\n  position: relative;\n  z-index: 1;\n  top: -95%;\n  left: -100%;\n  transition: .15s ease-out;\n  height: 90%;\n  width: 80%;\n  background-color: rgb(83, 13, 80);\n  border: 2px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.slide-in {\n  left: 0%;\n  transition: .15s ease-out;\n}\n.sidebar-menu-list{\n  height: 95%;\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1%;\n}\n.sidebar-list {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  cursor: pointer;\n  font-size: 2rem;\n  border: 1px solid white;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-list:hover {\n  font-weight: bold;\n}\n\n/* image slider CSS */\n.image-div {\n  height: 88.8%;\n}\n.export-div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.main-image-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: rgb(0, 0, 0);\n}\nbutton {\n  width: 50%;\n  height: 3rem;\n  font-weight: bold;\n}\n.button-div {\n  display: flex;\n  justify-content: space-evenly;\n}\n.image-slider-div {\n  max-width: 100%;\n}\n\n/* navigator CSS */\n.navigator-div {\n  color: white;\n  background-color: black;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.dot-div {\n  color: white;\n  padding: .3rem;\n}",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],d=i.base?s[0]+i.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var v=r(p,i);i.byIndex=c,t.splice(c,0,{identifier:u,updater:v,references:1})}o.push(u)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=n(a[o]);t[c].references--}for(var s=i(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},907:(e,t,n)=>{n.d(t,{Z:()=>r});const i={menuList:["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5","Menu 6"],activeMenuName:"",openedSidebar:!1,init:e=>{e.appendChild(i.mainMenu())},mainMenu:()=>{const e=document.createElement("div");e.classList.add("main-menu-title");const t=document.createElement("div");t.classList.add("top-flex"),t.append(i.hamburger(),e);const n=document.createElement("div");n.appendChild(i.botFlexMenus(i.menuList,0,1,2));const r=document.createElement("div");return r.classList.add("main-menu-div"),r.append(t,n),e.textContent=i.activeMenuName,r},botFlexMenus:(e,t,n,r)=>{const a=document.createElement("div");a.textContent=e[t],a.classList.add("left"),a.addEventListener("click",(e=>i.activatedMenu(e)));const o=document.createElement("div");o.textContent=e[n],o.classList.add("center"),o.addEventListener("click",(e=>i.activatedMenu(e)));const c=document.createElement("div");c.textContent=e[r],c.classList.add("right"),c.addEventListener("click",(e=>i.activatedMenu(e)));const s=document.createElement("div");return s.classList.add("bot-flex-child"),s.append(a,o,c),i.activeMenuName=e[t],s},activatedMenu:e=>{i.activeMenuName=e.target.innerText,document.querySelector(".main-menu-title").textContent=i.activeMenuName},hamburger:()=>{const e=document.createElement("div");e.classList.add("hamburger-div");const t=document.createElement("img");return t.classList.add("hamburger-icon"),t.src="https://openclipart.org/image/2000px/221605",t.addEventListener("click",i.openSidebar),e.appendChild(t),e},openSidebar:()=>{if(!1===i.openedSidebar){const e=document.createElement("div");e.append(i.sidebarList(i.menuList)),e.classList.add("sidebar-div"),setTimeout((()=>{e.classList.add("slide-in")}),10),i.openedSidebar=!0;const t=document.querySelector(".body-div");return t.appendChild(e),void t.addEventListener("click",i.outsideSidebar)}i.closeSidebar()},closeSidebar:()=>{const e=document.querySelector(".sidebar-div");e.classList.remove("slide-in");const t=document.querySelector(".body-div");t.removeEventListener("click",i.test),i.openedSidebar=!1,setTimeout((()=>{t.removeChild(e)}),150)},outsideSidebar:e=>{const t=e.target.classList[0];i.openedSidebar&&"sidebar-div"!==t&&"hamburger-icon"!==t&&i.closeSidebar()},sidebarList:e=>{const t=document.createElement("div");t.classList.add("sidebar-menu-list");for(let n=0;n<e.length;n+=1){const i=document.createElement("div");i.classList.add("sidebar-list"),i.textContent=e[n],t.appendChild(i)}return t}},r=i.init}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),a=n(569),o=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),m=n.n(u),p=n(426),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=o().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),t()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;var g=n(907);const h=["https://www.monsterhunter.com/wp-content/uploads/sites/3/2021/09/gallery13_img07.jpg","https://www.monsterhunter.com/wp-content/uploads/sites/3/2022/01/gallery19_img01.jpg","https://www.monsterhunter.com/wp-content/uploads/sites/3/2021/03/gallery03_img02.jpg","https://www.monsterhunter.com/wp-content/uploads/sites/3/2021/03/gallery04_img06.jpg","https://www.monsterhunter.com/wp-content/uploads/sites/3/2021/08/gallery10_img08.jpg"],f={activeImage:0,init:e=>{const t=document.createElement("div");t.classList.add("export-div"),t.append(f.mainImage(),f.navigator(),f.imageButtons()),e.appendChild(t)},mainImage:()=>{const e=document.createElement("div");e.classList.add("main-image-div");const t=document.createElement("img");return t.classList.add("image-slider-div"),t.src=h[f.activeImage],e.appendChild(t),e},imageButtons:()=>{const e=document.createElement("button");e.type="button",e.textContent="<<",e.onclick=()=>f.scrollLeft();const t=document.createElement("button");t.type="button",t.textContent=">>",t.onclick=()=>f.scrollRight();const n=document.createElement("div");return n.classList.add("button-div"),n.append(e,t),n},scrollLeft:()=>{0===f.activeImage?f.activeImage=h.length-1:f.activeImage-=1,document.querySelector(".image-slider-div").src=h[f.activeImage],f.updateNavDots()},scrollRight:()=>{f.activeImage===h.length-1?f.activeImage=0:f.activeImage+=1,document.querySelector(".image-slider-div").src=h[f.activeImage],f.updateNavDots()},navigator:()=>{const e=document.createElement("div");e.classList.add("navigator-div");for(let t=0;t<h.length;t+=1){const n=document.createElement("div");n.classList.add("dot-div"),n.id=`dot-${t}`,t!==f.activeImage?n.textContent="◯":n.textContent="⚫",e.appendChild(n)}return e},updateNavDots:()=>{for(let e=0;e<h.length;e+=1){const t=document.querySelector(`#dot-${e}`);"⚫"===t.textContent&&(t.textContent="◯"),e===f.activeImage&&(t.textContent="⚫")}}},b=f.init,y={init:()=>{document.body.append(y.titleDiv(),y.aboutDiv(),y.bodyDiv())},titleDiv:()=>{const e=document.createElement("a");e.href="https://github.com/TYLPHE",e.classList.add("title-div"),e.target="_blank";const t=document.createElement("img");t.src="https://avatars.githubusercontent.com/u/85977718?v=4",t.classList.add("avatar");const n=document.createElement("div");return n.innerText="Dynamic Interactions by TYLPHE",n.classList.add("title-text"),e.append(t,n),e},bodyDiv:()=>{const e=document.createElement("div");return e.classList.add("body-div"),(0,g.Z)(e),e.append(y.imageDiv()),e},imageDiv:()=>{const e=document.createElement("div");return e.classList.add("image-div"),b(e),e},aboutDiv:()=>{const e=document.createElement("div");e.classList.add("about-div");const t=document.createElement("h1");t.textContent="About this project";const n=document.createElement("p");n.textContent="This page is designed for practicing everyday techniques used by JavaScript programmers.";const i=document.createElement("a");i.textContent="Objectives:",i.href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/dynamic-user-interface-interactions",i.target="_blank";const r=document.createElement("ul");return function(e){for(let t=0;t<e.length;t+=1){const n=document.createElement("li");n.textContent=e[t],r.appendChild(n)}}(["Dropdown Menu","Mobile Menu","Image slider"]),e.append(t,n,i,r),e}};y.init()})()})();