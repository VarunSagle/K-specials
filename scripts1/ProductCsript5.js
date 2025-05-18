var side9 = document.getElementById('side9');
var side10 = document.getElementById('side10');

var About9 = document.getElementById("About9");
var back9 = document.getElementById('back9');

var AboutProduct9 = document.getElementById('AboutProduct9');
var Continer9 = document.getElementById('Continer9');
var buy9 = document.getElementById('buy9');

const mediaQuery9 = window.matchMedia("(max-width: 992px)");
const mediaQuery10 = window.matchMedia("(max-width: 600px)");

AboutProduct9.addEventListener("click", function() {
  info9.style.top = "-330px";
  About9.style.top = "30px";
});

back9.addEventListener("click", function() {
  info9.style.top = "0px";
  About9.style.top = "360px";
});

AboutProduct9.addEventListener("click", function () {
  if (mediaQuery10.matches) {
    // If screen width is ≤600px (mobile)
    side9.style.width = "500px";
  } else if (mediaQuery9.matches) {
    // If screen width is ≤992px but >600px (tablet)
    info9.style.width = "740px";
  } else {
    // Desktop
  }
});

Continer9.addEventListener("click", function () {
  if (mediaQuery10.matches) {
    // If screen width is ≤600px (mobile)
    side9.style.width = "500px";
    side9.style.left = "-150px";

    side10.style.left = "-140px";

    Pro9.style.left = "-230px";
    buy9.style.display = "block";
    AboutProduct9.style.top = "20px";
    AboutProduct9.style.left = "50%";

    About9.style.left = "170px";
    About9.style.width = "320px";

  } else if (mediaQuery9.matches) {
    // If screen width is ≤992px but >600px (tablet)
    info9.style.width = "740px";
  } else {
    // Desktop
  }
});




buy9.addEventListener("click", function () {
  if (mediaQuery10.matches) {
    // If screen width is ≤600px (mobile)
    side9.style.width = "500px";
    side9.style.marginLeft = "372px";

    side10.style.marginLeft = "140px";

    Pro9.style.marginLeft = "305px";

  } else if (mediaQuery9.matches) {
    // If screen width is ≤992px but >600px (tablet)
    info9.style.width = "740px";

  } else {
    // Desktop
  }
});
