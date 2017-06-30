directPortalApp.controller("salesReservationController", function ($scope, $state, $stateParams, serviceWrapper, unitService, reservationModuleService) {
    //console.log($.connection);
    //var hubProxy = $.connection.dPReservationModuleHub;

    function addNewReservationToPage(resv) {
        alert(resv.Name);
    }
    unitService.get($stateParams.id, function (response) {

        $scope.unit = response.data[0];
        alert($scope.unit);
    });


    $scope.customerName = "";
    serviceWrapper.get('OrganizationUnit').getAll('', function (response) {
        $scope.agencies = response.data;
    });

    serviceWrapper.get('Person').getAll('', function (response) {
        $scope.salesPersons =  response.data;
    });

    $scope.reservation = {
        "Name": "Booking: " + $scope.customerName,
        "StatusId": 1,
        "AgencyID": 0,
        "BuyerID": 0,
        "SalesPersonID": 0,
        "UnitID": $stateParams.id

    };


    $scope.makeAppointment = function () {

        serviceWrapper.get('ReservationStatus').getByName('Appointment', function (response) {
            $scope.reservationStatus = response.data;

        });

        serviceWrapper.get('Person').create({ "Name": $scope.customerName }, function (response) {
            $scope.buyer = response.data;

            $scope.reservation.BuyerID = $scope.buyer.ID;

            $scope.reservation.AgencyID = $scope.agencyID;

            $scope.reservation.SalesPersonID = $scope.salesPersonID;


            console.log($scope.reservation);

            serviceWrapper.get('Reservation').create($scope.reservation, function (response) {
                $state.go('sales.listreservation');
            });

        });




    }
});