/* global Vue, Rails */
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