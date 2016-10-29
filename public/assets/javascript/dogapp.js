// Set up variables and empty arrays for location data to be pushed into
var shelter = [];
var shelterInfo = [];
var locate;
var shelterId;
var shelterIdLat;
var shelterIdLng;
var shelterIdName;
var data;
// Set up event handler for when the image of the dog gets clicked. The user must input location and then click on the dog they want.
// resets all the array and html data.
// Based on user input for address and the dog they click, we send the ajax call to petfinder to retrieve a list of the breed at a specific location
$('.dog').on('click', function(e) {
    e.preventDefault();
    shelterInfo = [];
    shelter = [];
    locate = $('#location').val();
    console.log(locate);
    $('#apiDiv').html('');
    if (locate === "") {
        $('#apiDiv').append('<h4>Please enter zip code and <br> then select a dog to continue!</h4>');
    }
        e.preventDefault();
        var dogType = $(this).data('breed');
        console.log(dogType);
        console.log(locate);
        locate = $('#location').val();
        var queryURL = 'https://api.petfinder.com/pet.find?key=e87ed7f16feb54480c426720735345a9&animal=dog&breed=' + dogType + '&location=' + locate + '&format=json&callback=?';
    $.ajax({
        url: queryURL,
        method: 'GET',
        dataType: 'JSONP'
    }).done(function(response) {
        console.log(response);
        var dog = response.petfinder.pets.pet;
        // Appends all the data we retrieved from petfinder into a div. The div is set to hidden except the one with the active class.
        // Checks for undefined stuff and changes the content of the div if it is undefined.
        // Adds a button for navigating through the dogDivs.
        // Adds a button, that when clicked, will open up maps and place a marker on the map.
        for (var i = 0; i <= 9; i++) {
                if (i === 0) {
                    dogDiv = $('<div>', {
                        'class': 'dogDiv dogDivActive'
                    });
                } else {
                    dogDiv = $('<div>', {
                    'class': 'dogDiv'
                });
                }
                console.log(dog[i].shelterId['$t']);
                // pushes the shelter id to an empty array. This is needed because the pet.find method does not return any info on the shelter!
                shelter.push(dog[i].shelterId['$t']);
                console.log(shelter);
                dogDiv.append('<a href="https://www.petfinder.com/petdetail/' + dog[i].id['$t'] +  '"><img src=' + dog[i].media.photos.photo[3]['$t'] + ' />');
                dogDiv.append('<p><h4>Name: ' + dog[i].name['$t']);
                if (dog[i].description['$t'] === undefined) {
                    dogDiv.append("<h4>Meet me!</h4><p>No description available, but look how cute I am!</p>");
                } else { 
                    dogDiv.append('<h4>Meet me!</h4><p>' + dog[i].description['$t']);
                }
                dogDiv.append('<p>Email @: <a href="mailto:' + dog[i].contact.email['$t'] + '">' + dog[i].contact.email['$t'] + '</a> for more info');
                if (dog[i].contact.phone['$t'] === undefined) {
                    dogDiv.append('<p>No phone number available, email us instead!</p>');
                } else {
                    dogDiv.append('<p>Call for more info: ' + dog[i].contact.phone['$t']);
                };
                dogDiv.append($('<button>', {
                    class: 'prev glyphicon glyphicon-menu-left',
                    id: 'goBack',
                    text: 'Prev'
                }));
                dogDiv.append($('<button>', {
                    text: 'Next',
                    class: 'next glyphicon glyphicon-menu-right',
                    id: 'goForward'
                }));
                dogDiv.append($('<button>', {
                    class: 'locateDog',
                    text: 'Locate',
                    value: i
                }));
                $('#apiDiv').append(dogDiv);
        }
        getShelterId();
    })
});
// Set up event handler for when the next/prev button is clicked.
// when next button is clicked, takes the dogDivActive class off the current dogDiv and adds to the next one using next(), this allows the next dog div to be visible to prevent too much clutter.
// Prev button works the same way except going backwards. 
// Will automatically cycle to the first (for next) or the last (for prev) if the length is 0. 
$('#apiDiv').on('click', '#goForward', function() {
    var currentDogDiv = $('.dogDivActive');
    var nextDogDiv = currentDogDiv.next();
    if (nextDogDiv.length === 0) {
        nextDogDiv = $('.dogDiv').first();
    }
    currentDogDiv.removeClass('dogDivActive');
    nextDogDiv.addClass('dogDivActive');
});
$('#apiDiv').on('click', '#goBack', function() {
    var currentDogDiv = $('.dogDivActive');
    var prevDogDiv = currentDogDiv.prev();
    if (prevDogDiv.length === 0) {
        prevDogDiv = $('.dogDiv').last();
    }
    currentDogDiv.removeClass('dogDivActive');
    prevDogDiv.addClass('dogDivActive');
});
// pull the shelter info from the pet.find method and then use shelter.find to find 100 shelters in this location.
// Compares the shelter's id with the id pulled from pet.find. Pet.find only returns the shelter id and no info on location.
// For whatever reason, if you change the number of pets to display, petfinder api also does not work properly and will return undefined.
function getShelterId() {
    var shelterURL = 'https://api.petfinder.com/shelter.find?key=e87ed7f16feb54480c426720735345a9&count=100&location=' + locate + '&format=json&callback=?';
    $.ajax({
        url: shelterURL,
        method: 'GET',
        dataType: 'JSONP',
    }).done(function(shelterResponse) {
        shelterInfo = [];
        console.log(shelterResponse);
        var shelterIdInfo = shelterResponse.petfinder.shelters.shelter, i;
        // loops through all 100 shelters and compares the shelter id to those of the dogs we got from the previous ajax call.
        for (i = 0; i < shelterIdInfo.length; i++) {
            // console.log(shelterResponse.petfinder.shelters.shelter[i].id['$t']);
            var shelterId = shelterIdInfo[i].id['$t'];
            for (var j = 0; j < shelterIdInfo.length; j++) {
                // If there is a match, will grab the lat and lng of the shelter and push to an object so we can access in maps
                if (shelter[j] === shelterId) {
                    shelterIdName = shelterIdInfo[i].name['$t'];
                    shelterIdLat = shelterIdInfo[i].latitude['$t'];
                    shelterIdLng = shelterIdInfo[i].longitude['$t'];
                    // console.log(shelterResponse.petfinder.shelters.shelter[i].latitude['$t']);
                    // console.log(shelterResponse.petfinder.shelters.shelter[i].longitude['$t']);
                    shelterInfo.push({
                        'name': shelterIdName,
                        'lat': shelterIdLat,
                        'lng': shelterIdLng
                    });
                };
            };
        }
    });
};
// Initialized google maps on load. Initially had directions but petfinder's coordinates were not too accurate unfortunately.
function initialize() {
    //Add the event listener after Google Maps and window is loaded. Once the user clicks on the button, then google maps will be visible on the screen.
    $('#apiDiv').on('click', '.locateDog', function () {
        var buttonVal = $(this).attr('value');
        console.log(buttonVal);
        console.log(shelterInfo);
        var mapOptions = {
            center: { lat: 37.09024, lng:  -95.712891 },
            zoom: 3
        };
        // Set up maps to load into div and creates new marker info windows.
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var infowindow = new google.maps.InfoWindow();
        // Button value is used to find the corresponding position on the object to pull location data. Lat and lng is set. 
        var data = shelterInfo[buttonVal],
            latLng = new google.maps.LatLng(data.lat, data.lng);

          // Create a marker and place it on the map based on pet shelter
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: data.name
        });
        // Zooms in to marker location automatically
        map.setZoom(10);
        map.panTo(marker.position);
        // Attaches a click event to the current marker to display the infowindow
        google.maps.event.addListener(marker, "click", function() {
            infowindow.setContent(data.name);
            infowindow.open(map, marker);
        });
    });
};

google.maps.event.addDomListener(window, 'load', initialize);
// Initialize Firebase

