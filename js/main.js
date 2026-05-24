(function () {
  "use strict";

  var toggle = document.getElementById("menu-abrir");
  var nav = document.getElementById("menu-principal");

  function setNavOpen(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    var sr = toggle.querySelector(".sr-only");
    if (sr) sr.textContent = open ? "Fechar menu" : "Abrir menu";
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setNavOpen(false);
      }
    });
  }

  var ano = document.getElementById("ano-atual");
  if (ano) {
    ano.textContent = String(new Date().getFullYear());
  }
})();
