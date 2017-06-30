reservation.controller("viewReservationModuleController", function ($scope, $stateParams, reservationModuleService, unitService, reservationService) {

    unitService.getAll('', function (response) {
        $scope.Units = response.data;

        reservationModuleService.getReservation($stateParams.id, function (response) {
            console.log("Got Reservation from Module Service");
            console.log(response);
            $scope.reservation = response.data;
            console.log($scope.reservation);
        });
    });


});