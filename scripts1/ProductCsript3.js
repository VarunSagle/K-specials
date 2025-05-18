var side5 = document.getElementById('side5');
var side6 = document.getElementById('side6');

var About5 = document.getElementById("About5");
var back5 = document.getElementById('back5');

var AboutProduct5 = document.getElementById('AboutProduct5');
var Continer5 = document.getElementById('Continer5');
var buy5 = document.getElementById('buy5');


const mediaQuery5 = window.matchMedia("(max-width: 992px)");
const mediaQuery6 = window.matchMedia("(max-width: 600px)");


AboutProduct5.addEventListener("click", function(){

  info5.style.top = "-330px";
  About5.style.top = "30px";
})


back5.addEventListener("click", function(){

  info5.style.top = "0px";
  About5.style.top = "360px";
})



AboutProduct5.addEventListener("click", function () {
      if (mediaQuery6.matches) {
        // If screen width is ≤600px (mobile)
      side5.style.width = "500px";

      } else if (mediaQuery5.matches) {
        // If screen width is ≤992px but >600px (tablet)
      info5.style.width = "740px";

      } else {
        // Desktop
       
      }
    });




  
 Continer5.addEventListener("click", function () {
      if (mediaQuery6.matches) {
        // If screen width is ≤600px (mobile)
    side5.style.width = "500px";
    side5.style.left = "-150px";
   
    side6.style.left = "-140px";

    Pro5.style.left = "-230px";
    buy5.style.display = "block"
    AboutProduct5.style.top = "20px";
    AboutProduct5.style.left = "50%";


    About5.style.left = "170px";
    About5.style.width = "320px";

      } else if (mediaQuery5.matches) {
        // If screen width is ≤992px but >600px (tablet)
       info5.style.width = "740px";

      } else {
        // Desktop
       
      }
    });



buy5.addEventListener("click", function () {
  if (mediaQuery6.matches) {
    // If screen width is ≤600px (mobile)
    side5.style.width = "500px";
    side5.style.marginLeft = "372px";

    side6.style.marginLeft = "140px";

    Pro5.style.marginLeft = "305px";

  } else if (mediaQuery5.matches) {
    // If screen width is ≤992px but >600px (tablet)
    info5.style.width = "740px";

  } else {
    // Desktop
  }
});

