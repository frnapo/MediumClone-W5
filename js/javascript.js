// funzione per applicare classe a nav (transizione da gialla a bianca)

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > header.clientHeight) {
      /*.clientHeight mi ha svoltato la vita trovato su google :P */
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// funzione per nascondere/mostrare casualmente le M

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// ottengo una visibilita' casualmente, cambiando il valore decido se nascondere piu' - o - meno M
function getRandomVisibility() {
  return Math.random() < 0.2 ? "hidden" : "visible";
}

function animateSvg() {
  var paths = document.querySelectorAll("path");

  paths.forEach(function (path) {
    setTimeout(function () {
      path.style.visibility = getRandomVisibility();
    }, getRandomNumber(0, 3000)); // cambio questi valori x ottenere la velocita' dell'animazione desiderata
  });

  setTimeout(animateSvg, 3000); // cambio questi valori x ottenere la velocita' dell'animazione desiderata
}

document.addEventListener("DOMContentLoaded", function () {
  animateSvg();
});
