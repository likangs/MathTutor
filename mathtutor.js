
$(document).ready(function(){
  $('#T-Quote-Carousel').slick({
      dots: true,
      arrows: true,
  });

  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    if(y_scroll_pos > 1216) {
      $( ".step1").show("fade", {}, 1300);
    } else {
      $( ".step1").hide("fade", {}, 1300);
    }

    if(y_scroll_pos > 1316) {
      $( ".step2").show("fade", {}, 1300);
    } else {
      $( ".step2").hide("fade", {}, 1300);
    }

    if(y_scroll_pos > 1416) {
      $( ".step3").show("fade", {}, 1300);
    } else {
      $( ".step3").hide("fade", {}, 1300);
    }

    if(y_scroll_pos > 1516) {
      $( ".step4").show("fade", {}, 1300);
    } else {
      $( ".step4").hide("fade", {}, 1300);
    }

    if(y_scroll_pos > 1616) {
      $( ".step5").show("fade", {}, 1300);
    } else {
      $( ".step5").hide("fade", {}, 1300);
    }
  });

});

//Defines map properties
function myMap() {
  var mapProp= {
    center: {lat: 40, lng: -102},
    zoom:4,
  };

  var mapDiv = document.getElementById('googleMap');
  var map = new google.maps.Map(mapDiv, mapProp);
  new google.maps.Marker({
    position: {lat: 42.54019700000001, lng: -83.79258099999998},
    map: map,
    title: 'St. Patrick Middle School, Brighton, MI',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

  new google.maps.Marker({
    position: {lat: 37.3617612, lng: -122.0530612},
    map: map,
    title: 'Sunnyvale Middle School, Mango Avenue, Sunnyvale, CA',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

  new google.maps.Marker({
    position: {lat: 47.5979707, lng: -122.30393939999999},
    map: map,
    title: 'Washington Middle School, South Jackson Street, Seattle, WA, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

  new google.maps.Marker({
    position: {lat: 29.74183009999999, lng: -95.40565400000003},
    map: map,
    title: 'Lanier Middle School, Woodhead Street, Houston, TX, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

    new google.maps.Marker({
    position: {lat: 40.8543227, lng: -73.91287190000003},
    map: map,
    title: 'Middle School 390, Andrews Avenue South, Bronx, New York City, NY, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

  new google.maps.Marker({
    position: {lat: 38.9153755, lng: -77.0686541},
    map: map,
    title: 'Hardy Middle School, 35th Street Northwest, D.C., DC, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

    new google.maps.Marker({
    position: {lat: 44.8582122, lng: -92.61506099999997},
    map: map,
    title: 'Meyer Middle School, North 9th Street, River Falls, Wis, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

  new google.maps.Marker({
    position: {lat: 25.815408, lng: -80.2742189},
    map: map,
    title: 'Miami Springs Middle School, Miami Springs, Florida, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

    new google.maps.Marker({
    position: {lat: 37.6586153, lng: -113.09073619999998},
    map: map,
    title: 'Cedar Middle School, West Royal Hunte Drive, Cedar City, Utah, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

  new google.maps.Marker({
    position: {lat: 40.382354, lng: -80.06089099999997},
    map: map,
    title: 'Jefferson Middle School, Moffett Street, Pittsburgh, PA, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

  new google.maps.Marker({
    position: {lat: 34.1022341, lng: -118.07825869999999},
    map: map,
    title: 'Jefferson Middle School, East Las Tunas Drive, San Gabriel, Los Angeles County, CA, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });

  new google.maps.Marker({
    position: {lat: 32.838151, lng: -117.17443129999998},
    map: map,
    title: 'Innovation Middle School, Arvinels Avenue, San Diego, CA, United States',
    animation: google.maps.Animation.DROP,
    icon: 'img/school.png'
  });
}

var onresize = function(e) {
   //note i need to pass the event as an argument to the function
   width = e.target.outerWidth;
   height = e.target.outerHeight;
   console.log(width);
}
window.addEventListener("resize", onresize);