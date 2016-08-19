var app = angular.module('eventsMod', []);

app.controller('MainCtrl', [function() {
    var self = this;
        
    self.events = [
    {
        image: "images/hartbeeps.png",
        venue: "Hartbeeps Happy House",
        startDate: new Date("2016-08-18T08:00:00+00:00"),
        endDate: new Date("2016-08-18T09:00:00+00:00"),
        eventTitle: "Teddy bears picnic",
        description: "Lorem ipsum dolor sit amet, ad vis veritus moderatius, sanctus mediocrem est et, has alii errem detraxit te. Eos quodsi facilisis consulatu an, ea cum alterum recusabo praesent, vis id agam quidam assueverit. Fugit percipit convenire ea quo, eu eum vero accusam. Graece fierent et mel, pri aliquip gloriatur id. Eum ut suas tantas latine, eos quidam fastidii invenire no. Facer nonumy id per.",
        latlong: [56.366662, -3.834064]
    },
    {
        image: "images/stirling.jpg",
        venue: "Stirling toddlers group",
        startDate: new Date("2016-08-19T13:00:00+00:00"),
        endDate: new Date("2016-08-19T14:00:00+00:00"),
        eventTitle: "Childrens play event",
        description: "Lorem ipsum dolor sit amet, ad vis veritus moderatius, sanctus mediocrem est et, has alii errem detraxit te. Eos quodsi facilisis consulatu an, ea cum alterum recusabo praesent, vis id agam quidam assueverit. Fugit percipit convenire ea quo, eu eum vero accusam. Graece fierent et mel, pri aliquip gloriatur id. Eum ut suas tantas latine, eos quidam fastidii invenire no. Facer nonumy id per.",
        latlong: [56.117753, -3.940331]
    },
    {
        image: "images/daisy.png",
        venue: "The Daisy Foundation",
        startDate: new Date("2016-08-21T09:00:00+00:00"),
        endDate: new Date("2016-08-21T09:30:00+00:00"),
        eventTitle: "Perth kids soft play",
        description: "Lorem ipsum dolor sit amet, ad vis veritus moderatius, sanctus mediocrem est et, has alii errem detraxit te. Eos quodsi facilisis consulatu an, ea cum alterum recusabo praesent, vis id agam quidam assueverit. Fugit percipit convenire ea quo, eu eum vero accusam. Graece fierent et mel, pri aliquip gloriatur id. Eum ut suas tantas latine, eos quidam fastidii invenire no. Facer nonumy id per.",
        latlong: [56.389097, -3.442959]
    }   
    ];
    
    self.initialiseMap = function(divId, latLong) {
    var layer = 
        L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy;<a href="https://cartodb.com/attributions">CartoDB</a>'
    });
    
    var map = L.map(divId, {
        scrollWheelZoom: true,
        center: latLong,
        zoom: 15,
        layers: layer
    });
    
    //Draw map marker
    L.marker(latLong).addTo(map);
    };
    
}]);