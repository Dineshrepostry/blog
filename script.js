var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
            var elementsToShow = document.querySelectorAll('.reveal');
            function loop() {

                elementsToShow.forEach(function (element) {
                  if (isElementInViewport(element)) {
                    element.classList.add('active');

                  } else {
                    element.classList.remove('active');
                  }
                });

                scroll(loop);
              }
              loop();
              function isElementInViewport(el) {
                // special bonus for those using jQuery
                if (typeof jQuery === "function" && el instanceof jQuery) {
                  el = el[0];
                }
                var rect = el.getBoundingClientRect();
                return (
                  (rect.top < 0
                    && rect.bottom > 0)
                  ||
                  (rect.bottom > (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.top < (window.innerHeight || document.documentElement.clientHeight))
                  ||
                  (rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
                );
              }

function madras(){

  var madras=document.querySelector(".madras");
  madras.style.display="block";
  var btn=document.querySelector(".intro-text").style;
  btn.color="black";
  var ch=document.querySelector(".chennai");
  if(ch.style.display != "none"){
    ch.style.display="none"; 
  }
  var btn1=document.querySelector(".intro-text1").style;
  btn1.color="white";
}
function chennai(){
  
  var chennai=document.querySelector(".chennai");
  chennai.style.display="block";
  var btn=document.querySelector(".intro-text1").style;
  btn.color="red";
  var ch=document.querySelector(".madras");
  if(ch.style.display != "none"){
    ch.style.display="none";
  }
   var btn1=document.querySelector(".intro-text").style;
  btn1.color="white";
}