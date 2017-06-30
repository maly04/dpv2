directPortalApp.controller("contractDocumentController", function ($scope, $stateParams, reservationModuleService) {
    reservationModuleService.getReservation($stateParams.id, function (response) {
        $scope.reservation = response.data;
    })
});