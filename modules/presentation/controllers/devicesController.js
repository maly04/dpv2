angular.module('directPortalApp.presentation').controller('devicesController', function ($scope, $http, socket) {

    $scope.devices = [];
        $http.get('http://localhost:3333/devices').then(function (res) {
            $scope.devices = res.data;
            console.log($scope.devices);
        });

  // Socket listeners
  // ================
  socket.on('refresh_devices', function (devices) {
      $scope.devices = devices;
  });

});