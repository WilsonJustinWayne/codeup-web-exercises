(function () {
    "use strict";

    // My House - lat, long
    var latitude = 29.61395;
    var longitude = -98.73576;
    var tempUnit = "Imperial";
    var windSpeedUnit = "mph";
    var today, tomorrow, nextDay;

    function getWeatherDataByCoordinates() {
        // Getting Weather Info
        var mapData = $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: "1b9231e745acc0ca8d3ca09edb231549",
            lat: latitude,
            lon: longitude,
            units: tempUnit
        });
        createHtml(mapData);
    }

    function getWeatherDataByName(searchedName) {
        // Getting Weather Info
        var mapData = $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: "1b9231e745acc0ca8d3ca09edb231549",
            q: searchedName,
            units: tempUnit
        });
        createHtml(mapData);
    }

    // When Weather is done loading: assigns Temperature and Wind Speed units,
    function createHtml(mapData) {
        mapData.done(function (data) {
            console.log(data);
            var html = "";
            var deg = "";
            var weekDay = "";
            switch (tempUnit) {
                case "Imperial":
                    deg = '&deg' + 'F';
                    windSpeedUnit = 'mph';
                    break;
                case "Metric":
                    deg = '&deg' + 'C';
                    windSpeedUnit = 'm/s';
                    break;
                default:
                    deg = ' K';
                    windSpeedUnit = 'm/s';
                    break;
            }
            var cityName;
            if (data.city.name === undefined) {
                cityName = "No City Name";
            } else {
                cityName = data.city.name;
            }
            if (latitude === 29.61395 && longitude === -98.73576) {
                cityName = "My House";
            }
            $('#city').html('<div class="row"><div class="col-12"><h1 class="text-center m-0">Weather Application</h1></div></div><div class="row"><div class="col-12"><h3 class="text-center">' + cityName + ' - ' + '(' + latitude + ', ' + longitude + ')' + '</h3></div></div>');
            data.list.forEach(function (day, index) {
                // Setting the day of the week
                switch (index) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        weekDay = today;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        weekDay = tomorrow;
                        break;
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                        weekDay = nextDay;
                        break;
                    default:
                        break;
                }
                // Setting HTMl
                switch (index) {
                    case 0:
                    case 8:
                    case 16:
                        html += '<div class="col-4 card-body pt-1 pb-0">' +
                            '<div class="row">' +
                            '<div class="col-12 text-center">' +
                            '<h3>' + Math.round(day.main.temp_max) + deg + '/' + Math.round(day.main.temp_min) + deg +
                            '</h3></div></div>' +
                            '<div class="row">' +
                            '<div class="col-12 text-center"><p class="m-0"><strong>' + weekDay +
                            '</strong><img src="http://openweathermap.org/img/w/' + day.weather[0].icon + '.png">' +
                            '</p></div></div>' +
                            '<div class="row">' +
                            '<div class="col-12 text-center">' +
                            '<p><strong>' + day.weather[0].main + ': </strong>' + day.weather[0].description +
                            '</p></div></div>' +
                            '<div class="row">' +
                            '<div class="col-12 text-center">' +
                            '<p><strong>Humidity: </strong>' + day.main.humidity +
                            '</p></div></div>' +
                            '<div class="row">' +
                            '<div class="col-12 text-center"><p><strong>Wind Speed: </strong>' + day.wind.speed + ' ' + windSpeedUnit +
                            '</p></div></div>' +
                            '<div class="row">' +
                            '<div class="col-12 text-center"><p><strong>Pressure: </strong>' + day.main.pressure + ' mb' +
                            '</p></div></div></div>';
                        return html;
                    default:
                        break;
                }
            });
            $('#weather-info-container').html(html);

        });
    }

    function initMap() {

        var location = {lat: latitude, lng: longitude};
        var mapOptions = {zoom: 20, center: location, mapTypeId: 'satellite'};

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({position: location, map: map, draggable: true});
        var markerArray = [];
        markerArray.push(marker);

        function dragEnd(marker) {
            google.maps.event.addListener(marker, "dragend", function (event) {
                latitude = marker.getPosition().lat().toFixed(5);
                longitude = marker.getPosition().lng().toFixed(5);
                getWeatherDataByCoordinates();
            });
        }

        dragEnd(marker);

        $('#search').on('submit', function (e) {
            e.preventDefault();
            search();
        });
        $('#searchButton').click(function () {
            search();
        });

        function search() {
            var searchedName = $('#searchBox').val();
            var geocoder = new google.maps.Geocoder();
            if (searchedName !== "") {
                geocoder.geocode({'address': searchedName}, function (results, status) {
                    if (status === 'OK') {
                        map.setCenter(results[0].geometry.location);
                        latitude = results[0].geometry.location.lat().toFixed(5);
                        console.log(results[0].geometry.location.lat().toFixed(5));
                        longitude = results[0].geometry.location.lng().toFixed(5);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                            animation: google.maps.Animation.DROP,
                            draggable: true
                        });
                        markerArray.push(marker);
                        markerArray[0].setMap(null);
                        markerArray.shift();
                        dragEnd(marker);
                        getWeatherDataByName(searchedName);
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                });
            }
        }
    }

    // Button Functionality
    $('#imperial').click(function () {
        tempUnit = "Imperial";
        getWeatherDataByCoordinates();
    });
    $('#metric').click(function () {
        tempUnit = "Metric";
        getWeatherDataByCoordinates();
    });

    $('#kelvin').click(function () {
        tempUnit = "Kelvin";
        getWeatherDataByCoordinates();
    });

    // Source Site: Graham The Mann
    function dayOfWeek() {
        var d = new Date();
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        today = weekday[d.getDay()];
        tomorrow = weekday[d.getDay() + 1];
        nextDay = weekday[d.getDay() + 2];
    }

    function startWeatherLocation() {
        latitude = 29.61395;
        longitude = -98.73576;
        getWeatherDataByCoordinates();
    }

    dayOfWeek();
    startWeatherLocation();
    initMap();
})();