directPortalApp.controller('allreservationController', function ($scope, $rootScope, $state, serviceWrapper) {

    var hubProxy = $.connection.dPReservationModuleHub;
    
    function addNewReservationToPage() {
        alert('hello');
    }

    serviceWrapper.get('Reservation').getAll('', function (response) {
        $scope.reservations = response.data;
    });


    

    
    $scope.hide = {
        canceled: false,
        oldCancelNoAgency: false
    };


    angular.element(document).ready(function () {

        App.setPage('all-reservation');
        App.init();

        var table = $('#all-reservation').DataTable({
            dom: 't'
        });
        $('#dp-search-box').keyup(function () {
            table.search($(this).val()).draw();
        })

        $scope.toogleRows = function (status) {
            $scope.hide[status] = !$scope.hide[status];
            table.draw();
        }

        $scope.toggleColumn = function (column) {
            // not good column number after the call to column.visible
            var column = table.column(column);
            column.visible(!column.visible());
        }

        $scope.updateTable = function () {
            table.draw();
        }
        $.fn.dataTable.ext.search.push(
            function (settings, data, dataIndex) {
                var min = parseInt($scope.preageFrom, 10);
                var max = parseInt($scope.preageTo, 10);
                var age = parseFloat(data[8]) || 0; // use data for preAge

                if ((isNaN(min) && isNaN(max)) ||
                    (isNaN(min) && age <= max) ||
                    (min <= age && isNaN(max)) ||
                    (min <= age && age <= max)) {
                    return true;
                }
                return false;
            }
        );
        $.fn.dataTable.ext.search.push(
            function (settings, data, dataIndex) {
                var min = parseInt($scope.updateFrom, 10);
                var max = parseInt($scope.updateTo, 10);
                var val = parseFloat(data[9]) || 0; // use data for preAge

                if ((isNaN(min) && isNaN(max)) ||
                    (isNaN(min) && val <= max) ||
                    (min <= val && isNaN(max)) ||
                    (min <= val && val <= max)) {
                    return true;
                }
                return false;
            }
        );

        $.fn.dataTable.ext.search.push(
            function (settings, data, dataIndex) {

                if ($scope.hide.canceled && $(table.row(dataIndex).node()).attr('data-status') === 'canceled')
                    return false;
                else if ($scope.hide.oldCancelNoAgency && $(table.row(dataIndex).node()).attr('data-status') === 'oldCancelNoAgency') {
                    return false;
                }
                return true;
            }
        );
    });

    //serviceWrapper.get('Reservation').getAll('', function (response) {
    //    $scope.reservations = response.data;
    //    console.log($scope.reservations);
    //});


});