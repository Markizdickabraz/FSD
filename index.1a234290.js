!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=document.getElementById("link_home"),d=document.getElementById("link_about"),i=document.getElementById("link_products"),a=document.getElementById("link_contact"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",o),n.addEventListener("click",o),c.addEventListener("click",o),d.addEventListener("click",o),i.addEventListener("click",o),a.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=index.1a234290.js.map
