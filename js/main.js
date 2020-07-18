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
  
$('#navbar a, .btn').on('click', function(event){
    if (this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            }, 
            800
        );
    };
});