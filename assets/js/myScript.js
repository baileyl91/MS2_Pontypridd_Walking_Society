
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


var locations = [
    ['<h2>Caerphilly</h2>' + '<p>Length: 1 mile</p>',51.578602, -3.218060, 4],
    ['<h2>Tonypandy</h2>' + '<p>Length: 2 mile</p>', 51.618408, -3.454590, 5],
    ['<h2>Nantgarw</h2>' + '<p>Length: 3 mile</p>', 51.562470, -3.261900, 3],
  ];


function initMap() {
let map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 51.601150, lng: -3.349900 },
  zoom: 10,
});

var infowindow = new google.maps.InfoWindow();

  var marker, x;

  for (x = 0; x < locations.length; x++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[x][1], locations[x][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, x) {
      return function() {
        infowindow.setContent(locations[x][0]);
        infowindow.open(map, marker);
        
      }
    })(marker, x));
  }
}