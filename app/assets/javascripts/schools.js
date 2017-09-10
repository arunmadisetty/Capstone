/* global Vue, Rails, google */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: '',
      nameFilter: "",
      schools: []
    },
    mounted: function() {
    // Ajax call for SavedSearches
      Rails.ajax({
        url: "/api/v1/savedsearch",
        type: "GET",
        success: function(data) {
          console.log(data);
          var mapSaved = new google.maps.Map(document.getElementById('mapSavedSearch'), {
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
              map: mapSaved,
              position: {lat: latitude, lng: longitude}
            });
          });

          
          // data.forEach(function(datum) {
          //   console.log('datum is', datum["location"]["coordinates"]);
          //   var latitude = datum["location"]["coordinates"][1];
          //   var longitude = datum["location"]["coordinates"][0];
          //   // var point = {lat: latitude, lng: longitude};
          //   // console.log('point is ', point);
          //   var marker = new google.maps.Marker({
          //     map: mapIndexed,
          //     position: {lat: latitude, lng: longitude}
          //   });
          // });

          this.savedsearch = data;
        }.bind(this)
      });
    
    // Ajax call for Index
      Rails.ajax({
        url: "/api/v1/schools",
        type: "GET",
        success: function(schools) {
          console.log(schools);
          var mapIndexed = new google.maps.Map(document.getElementById('mapIndex'), {
            center: {lat: 41.8922745, lng: -87.6346887},
            zoom: 11
          });
          schools.forEach(function(school) {
            console.log('school is', school["location"]["coordinates"]);
            var latitude = school["location"]["coordinates"][1];
            var longitude = school["location"]["coordinates"][0];
            // var point = {lat: latitude, lng: longitude};
            // console.log('point is ', point);
            var marker = new google.maps.Marker({
              map: mapIndexed,
              position: {lat: latitude, lng: longitude}
            });
          });
          this.schools = schools;
        }.bind(this)
      });

    // Ajax call for Show
      Rails.ajax({
        url: "/api/v1/schools/" + school_id,
        type: "GET",
        success: function(school) {
          console.log("the school is", school);
          this.school = school;
        }.bind(this)
      });
    },
    methods: {
      isValidSchool: function(school) {
        return school.long_name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
      }
    },
    computed: {

    }
  });
});