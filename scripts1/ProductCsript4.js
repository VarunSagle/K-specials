var side7 = document.getElementById('side7');
var side8 = document.getElementById('side8');

var About7 = document.getElementById("About7");
var back7 = document.getElementById('back7');

var AboutProduct7 = document.getElementById('AboutProduct7');
var Continer7 = document.getElementById('Continer7');
var buy7 = document.getElementById('buy7');

const mediaQuery7 = window.matchMedia("(max-width: 992px)");
const mediaQuery8 = window.matchMedia("(max-width: 600px)");

AboutProduct7.addEventListener("click", function() {
  info7.style.top = "-330px";
  About7.style.top = "30px";
});

back7.addEventListener("click", function() {
  info7.style.top = "0px";
  About7.style.top = "360px";
});

AboutProduct7.addEventListener("click", function () {
  if (mediaQuery8.matches) {
    // If screen width is ≤600px (mobile)
    side7.style.width = "500px";
  } else if (mediaQuery7.matches) {
    // If screen width is ≤992px but >600px (tablet)
    info7.style.width = "740px";
  } else {
    // Desktop
  }
});

Continer7.addEventListener("click", function () {
  if (mediaQuery8.matches) {
    // If screen width is ≤600px (mobile)
    side7.style.width = "500px";
    side7.style.left = "-150px";

    side8.style.left = "-140px";

    Pro7.style.left = "-230px";
    buy7.style.display = "block";
    AboutProduct7.style.top = "20px";
    AboutProduct7.style.left = "50%";

    About7.style.left = "170px";
    About7.style.width = "320px";

  } else if (mediaQuery7.matches) {
    // If screen width is ≤992px but >600px (tablet)
    info7.style.width = "740px";
  } else {
    // Desktop
  }
});




buy7.addEventListener("click", function () {
  if (mediaQuery8.matches) {
    // If screen width is ≤600px (mobile)
    side7.style.width = "500px";
    side7.style.marginLeft = "372px";

    side8.style.marginLeft = "140px";

    Pro7.style.marginLeft = "305px";

  } else if (mediaQuery7.matches) {
    // If screen width is ≤992px but >600px (tablet)
    info7.style.width = "740px";

  } else {
    // Desktop
  }
});
