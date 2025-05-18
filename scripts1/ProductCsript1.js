var side1 = document.getElementById('side1');
var side2 = document.getElementById('side2');

var About1 = document.getElementById("About1");
var back1 = document.getElementById('back1');

var AboutProduct1 = document.getElementById('AboutProduct1');
var Continer1 = document.getElementById('Continer1');
var buy1 = document.getElementById('buy1');

const mediaQuery1 = window.matchMedia("(max-width: 992px)");
const mediaQuery2 = window.matchMedia("(max-width: 600px)");


AboutProduct1.addEventListener("click", function(){

info1.style.top = "-340px";
About1.style.top = "30px";
})

back1.addEventListener("click", function(){

info1.style.top = "0px";
About1.style.top = "360px";
})



 AboutProduct1.addEventListener("click", function () {
      if (mediaQuery2.matches) {
        // If screen width is ≤600px (mobile)
        side1.style.width = "500px";

      } else if (mediaQuery1.matches) {
        // If screen width is ≤992px but >600px (tablet)
       info1.style.width = "740px";

      } else {
        // Desktop
       
      }
    });


 Continer1.addEventListener("click", function () {
      if (mediaQuery2.matches) {
        // If screen width is ≤600px (mobile)
    side1.style.width = "500px";
    side1.style.left = "-150px";
   
    side2.style.left = "-140px";

    Pro1.style.left = "-230px";
    buy1.style.display = "block"
    AboutProduct1.style.top = "20px";
    AboutProduct1.style.left = "50%";


    About1.style.left = "170px";
    About1.style.width = "320px";

      } else if (mediaQuery1.matches) {
        // If screen width is ≤992px but >600px (tablet)
       info1.style.width = "740px";

      } else {
        // Desktop
       
      }
    });


 buy1.addEventListener("click", function () {
      if (mediaQuery2.matches) {
        // If screen width is ≤600px (mobile)
      side1.style.width = "500px";
      side1.style.marginLeft = "372px";

       side2.style.marginLeft = "140px";

       Pro1.style.marginLeft = "305px";

      } else if (mediaQuery1.matches) {
        // If screen width is ≤992px but >600px (tablet)
       info1.style.width = "740px";

      } else {
        // Desktop
       
      }
    });
