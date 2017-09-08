/* global Vue, Rails, google */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    mounted: function() {
      Rails.ajax({
        url: "/api/v1/savedsearch",
        type: "GET",
        success: function(data) {
          console.log(data);
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 41.8922745, lng: -87.6346887},
            zoom: 11
          });
          data.forEach(function(datum) {
            console.log('datum is', datum["location"]["coordinates"]);
            var latitude = datum["location"]["coordinates"][1];
            var longitude = datum["location"]["coordinates"][0];
            // var point = {lat: latitude, lng: longitude};
            // console.log('point is ', point);
            var marker = new google.maps.Marker({
              map: map,
              position: {lat: latitude, lng: longitude}
            });
          });

          this.savedsearch = data;
        }.bind(this)
      });
    },
    methods: {

    },
    computed: {

    }
  });
});