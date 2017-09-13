/* global Vue, Rails, google */
document.addEventListener("DOMContentLoaded", function(event) {
  Vue.use(VueCharts);

  var app = new Vue({
    el: '#app',
    data: {
      message: '',
      nameFilter: "",
      schools: [],
      googleMap: null,
      mylabel: 'TestDataLabel',
      mylabels: ["black", "asian", "white", "hispanic", "native_american"],
      mydata: [100,34,65],
      backgroundColors: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColors: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ]
    },
    mounted: function() {
    // Ajax call for SavedSearches
      Rails.ajax({
        url: "/api/v1/savedsearch",
        type: "GET",
        success: function(data) {
          console.log(data);
          this.schools = data;
          var index = 0;
          this.schools.forEach(function(school) {
            school.backgroundColor = this.backgroundColors[index];
            school.borderColor = this.borderColors[index];
            index += 1;
            if (index >= this.backgroundColors.length) {
              index = 0;
            }
            school.studentCountData = [];
            this.mylabels.forEach(function(label) {
              school.studentCountData.push(school["student_count_" + label]);
            }.bind(this));
          }.bind(this));

          console.log('schools length: ', this.schools.length);
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
          this.googleMap = mapIndexed;
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
            school.marker = marker;
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
        var showSchool = school.long_name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
        school.marker.setVisible(showSchool);
        return showSchool;
      },
      placeMarker: function(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        map.setCenter(location)
      },
      chartData: function(demo) {
        this.mydata.push(
          this.school.student_count_white,
          this.school.student_count_black,
          this.school.student_count_hispanic,
          this.school.student_count_asian,
          this.school.student_count_total
        );
      },
      chartLabels: function(label) {
        this.mylabels.push(this.school.long_name);
      }
    },
    computed: {

    }
  });
});