
    var time = new Date().getHours();
    var greet;

    if (time < 12) {
        greet = "Good Morning!";
    } else if (time > 18) {
        greet = "Good Evening!";
    } else {
        greet = "Good Afternoon!";
    }

    document.getElementById("greeting").innerHTML = 'Hello and ' + greet;

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var photos = document.getElementsByClassName("photo");
  
  if (n > photos.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = photos.length}
  for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";  
  }
  
  photos[slideIndex-1].style.display = "block";  
  
}


