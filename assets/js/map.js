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