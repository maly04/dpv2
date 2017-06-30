directPortalApp.controller('activereservationController', function ($scope, $rootScope, $linq, reservationModuleService, reservationstatusService) {

    reservationModuleService.getAllReservations(function (response) {
        $scope.reservations = response.data;
        console.log(reservations);
        reservationstatusService.getAll('', function (response) {

            $scope.groupedReservationsByType = $linq.Enumerable().From($scope.reservations)
            .GroupBy(function (x) {
                return x.Status.Name;
            }).ToArray();
        });
    });

});