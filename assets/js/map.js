var locations = [
    ['<h2>The Rocking Stone</h2>' + '<p>Length: 1 mile</p>',51.60233, -3.32738],
    ['<h2>Saint Gwynno Forest</h2>' + '<p>Length: 2 mile</p>', 51.65761, -3.41281],
    ['<h2>Clydach Vale Park</h2>' + '<p>Length: 3 mile</p>', 51.62471, -3.46850],
    ['<h2>Eglwysilan Mountain</h2>' + '<p>Length: 3 mile</p>', 51.60858, -3.30968],
    ['<h2>Forest Fawr Park</h2>' + '<p>Length: 1 mile</p>', 51.54742, -3.23779],
    ['<h2>Caerphilly Mountain</h2>' + '<p>Length: 2 miles</p>', 51.56244, -3.22384],
    ['<h2>Barry Sidings</h2>' + '<p>Length: 1 mile</p>', 51.60835, -3.37174],
    ['<h2>Taff Trail</h2>' + '<p>Length: 5 miles</p>', 51.59341, -3.32003]
  ];


function initMap() {
let map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 51.601150, lng: -3.349900 },
  zoom: 11,
});

var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
        
      }
    })(marker, i));
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

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