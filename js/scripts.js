//Navigation and scrolling functions
function navExplore() {
    document.location.href = "explore.html";
}

function navStory() {
    document.location.href = "story.html";
}

function scrollContact() {
    var elmnt = document.getElementById("contactAnchor");
    elmnt.scrollIntoView();
}

function scrollTea() {
    var elmnt = document.getElementById("teaAnchor");
    elmnt.scrollIntoView(false);
}

function scrollCoffee() {
    var elmnt = document.getElementById("coffeeAnchor");
    elmnt.scrollIntoView(false);
}

function scrollAcc() {
    var elmnt = document.getElementById("accAnchor");
    elmnt.scrollIntoView();
}



//Form validation
function validate() {
    var zipcode = $("#zipcode").val();

    console.log(zipcode.length)

    if (zipcode.length != 5 && zipcode.length != 0) {
        alert("Zipcode is not valid.");
        return false;
    }

    var phone = $("#phone").val();
    if (phone.length != 10 && phone.length != 0) {
        alert("Phone number is not valid.");
        return false;
    }
}

//Custom Google Map API initialization
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.437861, lng: -79.920197 },
        zoom: 13.5,
        mapTypeControl: false,
        disableDefaultUI: true,
        //Custom styling using https://mapstyle.withgoogle.com/
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });

    //Custom Map Marker
    var iconVar = {
        url: "images/marker.png",
        size: new google.maps.Size(71, 71),
        scaledSize: new google.maps.Size(70, 70),
    }

    var canter = { lat: 40.437861, lng: -79.920197 };
    var marker = new google.maps.Marker({ position: canter, icon: iconVar, map: map });

    //Info bubble with link to shop picture modal
    var contentString = '<a href="#shop" rel="modal:open"><p style="color:#00217D; font-size:15px"><strong>Blue Monkey Tea</strong></p></a>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    infowindow.open(map, marker);
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}