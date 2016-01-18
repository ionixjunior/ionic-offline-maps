angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: [43.07493, -89.381388],
          zoom: 16
        };
        var map = L.map($element[0], mapOptions);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        $scope.onCreate({map: map});
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        window.addEventListener('load', initialize);
      }
    }
  }
});
