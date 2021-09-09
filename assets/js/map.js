/* Google Map API
    Using the support from documentation
    https://developers.google.com/maps/documentation */

  // Create array to store information
  // Gathered latitude and longitude using Google Map
  var locations = [
      ['<h2>The Rocking Stone</h2>' + '<p>Time: 1 hour</p>',51.60233, -3.32738],
      ['<h2>Saint Gwynno Forest</h2>' + '<p>Time: 5 hours</p>', 51.65761, -3.41281],
      ['<h2>Clydach Vale Park</h2>' + '<p>Time: 1hr 30mins</p>', 51.62471, -3.46850],
      ['<h2>Eglwysilan Mountain</h2>' + '<p>Time: 1hr 45mins</p>', 51.60858, -3.30968],
      ['<h2>Forest Fawr Park</h2>' + '<p>Time: 1 hour</p>', 51.54742, -3.23779],
      ['<h2>Caerphilly Mountain</h2>' + '<p>Time: 1hr 30mins</p>', 51.56244, -3.22384],
      ['<h2>Barry Sidings</h2>' + '<p>Time: 2hrs 30mins</p>', 51.60835, -3.37174],
      ['<h2>Taff Trail</h2>' + '<p>Time: 2 hours</p>', 51.59341, -3.32003]
    ];

// Function to initiate map with custom latitude and longitude with a zoom level of 11
function initMap() {
let map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 51.601150, lng: -3.349900 },
  zoom: 11,
});

// Create an pop up info window
var infowindow = new google.maps.InfoWindow();

// Array to store Marker
var marker, i;

// iterate to store custom markers
for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    // Event listener from the user, when clicked on a marker, a pop up window displays
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
        
      }
    })(marker, i));
  }
}

/* Expanded text box to reveal more text
    Using support from W3 Schools tutorial
    https://www.w3schools.com/howto/howto_js_collapsible.asp */

// Store variable    
var coll = document.getElementsByClassName("collapsible");
var i;

// Event listener for the user click on a route they like to know more.
// Once clicked, the text will expand to reveal more text
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}