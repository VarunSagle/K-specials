var side3 = document.getElementById('side3');
var side4 = document.getElementById('side4');

var About3 = document.getElementById("About3");
var back3 = document.getElementById('back3');

var AboutProduct3 = document.getElementById('AboutProduct3');
var Continer3 = document.getElementById('Continer3');
var buy3 = document.getElementById('buy3');


const mediaQuery3 = window.matchMedia("(max-width: 992px)");
const mediaQuery4 = window.matchMedia("(max-width: 600px)");


AboutProduct3.addEventListener("click", function(){

  info3.style.top = "-330px";
  About3.style.top = "30px";
})


back3.addEventListener("click", function(){

  info3.style.top = "0px";
  About3.style.top = "360px";
})



AboutProduct3.addEventListener("click", function () {
      if (mediaQuery4.matches) {
        // If screen width is ≤600px (mobile)
      side3.style.width = "500px";

      } else if (mediaQuery3.matches) {
        // If screen width is ≤992px but >600px (tablet)
      info3.style.width = "740px";

      } else {
        // Desktop
       
      }
    });




  
 Continer3.addEventListener("click", function () {
      if (mediaQuery4.matches) {
        // If screen width is ≤600px (mobile)
    side3.style.width = "500px";
    side3.style.left = "-150px";
   
    side4.style.left = "-140px";

    Pro3.style.left = "-230px";
    buy3.style.display = "block"
    AboutProduct3.style.top = "20px";
    AboutProduct3.style.left = "50%";


    About3.style.left = "170px";
    About3.style.width = "320px";

      } else if (mediaQuery3.matches) {
        // If screen width is ≤992px but >600px (tablet)
       info3.style.width = "740px";

      } else {
        // Desktop
       
      }
    });


buy3.addEventListener("click", function () {
  if (mediaQuery4.matches) {
    // If screen width is ≤600px (mobile)
    side3.style.width = "500px";
    side3.style.marginLeft = "372px";

    side4.style.marginLeft = "140px";

    Pro3.style.marginLeft = "305px";

  } else if (mediaQuery3.matches) {
    // If screen width is ≤992px but >600px (tablet)
    info3.style.width = "740px";

  } else {
    // Desktop
  }
});


