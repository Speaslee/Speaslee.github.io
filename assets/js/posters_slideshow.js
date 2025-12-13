var slideIndex = 0;
var carouselRunning = false;

function carousel() {
  if (carouselRunning) return;
  carouselRunning = true;
  
  var i;
  var x = document.getElementsByClassName("posterImages");
  
  if (x.length === 0) {
    carouselRunning = false;
    return;
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  
  x[slideIndex - 1].style.display = "block";
  
  carouselRunning = false;
  setTimeout(carousel, 5000);
}

carousel();