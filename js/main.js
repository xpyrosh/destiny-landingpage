// Not Using Google Maps API 

function initMap() {
    // The location of Toronto
    var toronto = {lat: 45.653, lng: 79.383};
    // The map, centered at Toronto
    var map = new google.maps.Map(
        document.querySelector('map'), {zoom: 4, center: toronto});
    // The marker, positioned at Toronto
    var marker = new google.maps.Marker({position: toronto, map: map});
  }
  
// JQuery Scroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#navbar a, .btn").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            // -100 for the nav bar spacing
          scrollTop: $(hash).offset().top - 65
        }, 800, function(){
  
        });
      } // End if
    });
  });

//   Sticky Menu Background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    }
    else {
        document.querySelector('#navbar').style.opacity = 1;
    }
})