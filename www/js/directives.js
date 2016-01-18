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
          center: [-23.568746, -46.647132],
          zoom: 18
        };
        var map = L.map($element[0], mapOptions);
        L.tileLayer('MapQuest/{z}/{x}/{y}.jpg', {
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
