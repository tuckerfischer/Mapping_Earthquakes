console.log("working");
let cityData = cities;

let map = L.map('mapid').setView([37.6213, -122.3790], 5);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

L.polyline(line, {
color: "yellow"
}).addTo(map);
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
//     .addTo(map);
// });
streets.addTo(map);

