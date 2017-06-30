directPortalApp.controller("salesListReservationController", function ($scope, $stateParams, $state, $linq, reservationModuleService) {

    reservationModuleService.getAllReservations(function (response) {
        $scope.allreservations = response.data;
        $scope.reservations = $linq.Enumerable().From($scope.allreservations)
            .ToArray();
    });
  

});