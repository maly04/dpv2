reservation.controller("createreservationModuleController", function ($scope, $http, serviceWrapper, $state, $stateParams, complexService, buildingService, $linq, unitService, unittypeService, reservationstatusService, reservationtypeService, reservationService, ownershiptypeService, reservationModuleService) {

    reservationstatusService.getAll('', function (response) {
        $scope.reservationStatuses = response.data;
    });

    $scope.reservation = {};
    $scope.reservation.DateOfReservation = new Date();
    $scope.reservation.DateOfContract = new Date();


    reservationService.create({ "Name": "Hello2" }, function (response) {
        console.log("Created Reservation");
        $scope.reservation = response.data;
        $scope.$apply();

    });



    ownershiptypeService.getAll('', function (response) {
        $scope.ownershipTypes = response.data;
    });


    //get booking reservation status

    //create reservation

    //get agencies for organization units

    //get ownership types

    $scope.setStatus = function (status) {
        alert(status.ID);
        $scope.reservation.StatusID = status.ID;
        reservationService.edit($scope.reservation, function (response) {
            alert("The status of the Reservation was updated.");
        }, function (response) {
            alert("There was a problem whilst updating the Reservation.");

        });
    };

    $scope.saveReservation = function () {
        reservationService.edit($scope.reservation, function (response) {

            alert("The Reservation was updated successfully.");

        }, function (response) {
            alert("There was a problem whilst updating the Reservation.");
            console.log($scope.reservation);

        });
    };

    $scope.cancelReservation = function () {
        $scope.reservation.StatusID = 4;
        reservationService.edit($scope.reservation, function (response) {
            $state.go('app.reservation.active');

        }, function (response) {
            alert("There was a problem whilst updating the Reservation.");

        });
    };

    serviceWrapper.get('OwnershipType').getOrCreateByName({ "Name": "Thai Company" }, function (response) {
        $scope.thaiCompanyOwnershipType = response.data;
    }, function (error) {
        console.log(error);
    });




    serviceWrapper.get('OrganizationUnit').get('', function (response) {
        $scope.Agencies = response.data;
    }, function (error) {
        console.log(error);
        });

    serviceWrapper.get('SaleStatusType').get('', function (response) {
        $scope.salesStatusTypes = response.data;
    }, function (error) {
        console.log(error);
    });

    serviceWrapper.get('UnitStatus').getAll('', function (response) {
        $scope.UnitStatuses = response.data;
    }, function (error) {
        console.log(error);
    });


    serviceWrapper.get('Person').get('', function (response) {
        $scope.salePersons = response.data;
    }, function (error) {
        console.log(error);
    });

    serviceWrapper.get('Complex').get('', function (response) {
        $scope.Complexes = response.data;
        //console.log(response.data);
    });

    buildingService.getAll('', function (response) {
        $scope.Buildings = response.data;
    });

    unitService.getAll('', function (response) {
        $scope.Units = response.data;
    });

    unittypeService.getAll('', function (response) {
        $scope.UnitTypes = response.data;
    });

    


    $scope.getBuildingByComplexId = function () {
        var selectedComplexId = $scope.selectedComplex;
        var filter = "x => x['ComplexId']==" + selectedComplexId;

        $scope.filteredBuildings = $linq.Enumerable().From($scope.Buildings)
            .Where(filter)
            .ToArray();

        console.log($scope.filteredBuildings);
    };

    $scope.getUnitByBuildingId = function () {
        var selectedBuildingId = $scope.selectedBuilding;
        var filter = "x => x['BuildingId']==" + selectedBuildingId;

        $scope.filteredUnits = $linq.Enumerable().From($scope.Units)
            .Where(filter)
            .ToArray();

        //console.log($scope.filteredUnits);
    };

    $scope.getOwnerShipType = function () {
        document.getElementById('errorMsgOwnerShip').innerHTML = '';
    }
    $('.next').click(function () {
        alert($scope.disableStep());
        if ($scope.disableStep() == false) {
            alert("Next");
            goToNext();
        }
        if ($scope.disableStep() == 'errorOwnerShip') {
            document.getElementById('errorMsgOwnerShip').innerHTML = 'This field is required';
        }
        if ($scope.disableStep() == 'errorSalePerson') {
            document.getElementById('errorMsgOwnerShip').innerHTML = '';
            document.getElementById('errorMsgSalePerson').innerHTML = 'This field is required';
        }
        if ($scope.disableStep() === 'errorSaleCommission') {
            document.getElementById('errorSaleCommission').innerHTML = 'This field is required';
        }

    });

    $scope.disableStep = function () {
        if ($scope.reservation.selectedOwnershipType === undefined) {
            return 'errorOwnerShip';
        }
        if ($scope.selectedSalePerson === undefined) {
            return 'errorSalePerson';
        }
        if ($scope.reservation.SalesPersonCommission === undefined) {
            return 'errorSaleCommission';
        }
        else {
            return false;
        }
    }

    var goToNext = function () {
        //disableStep();
        getCurrentSelectedDate();
        checkReservationType();
        checkOwnershipType();
        //go to second menu

        console.log($scope.reservation);
    };


    //$('.reservation-tabs-nav').children().children().each(function () {
    //    $(this).click(function (e) {
    //        console.log($(this));
    //        e.stopPropagation();
    //    });
    //});

    //$http.get(__env.apiUrl + "api/pricelist/getpricelistforunit/{id+}
    $scope.getUnitPriceById = function () {
        console.log($scope.UnitID);
        $http.get(__env.apiUrl + "api/pricelist/getpricelistforunit?id=" + $scope.UnitID).then(function (response) {
            console.log(response);
            $scope.selectedUnitObject = response.data;
        });
    };


    var getCurrentSelectedDate = function () {
        if (
            $scope.reservation.DateOfReservation === undefined ||
            $scope.reservation.DateOfContract === undefined
        ) {
            var dateFormat = new Date().toLocaleString('en-US');
            dateFormat = dateFormat.split(' ')[0];
            dateFormat = dateFormat.replace(/\,/g, "");
            $scope.reservation.DateOfReservation = dateFormat;
            $scope.reservation.DateOfContract = dateFormat;
        }
    };

    $scope.updateActiveAgency = function () {
        for (var i in $scope.Agencies) {
            if ($scope.reservation.AgencyID == $scope.Agencies[i].ID) {
                $scope.activeAgency = $scope.Agencies[i];
                $scope.reservation.ActiveAgency = $scope.activeAgency;
                break;
            }
        }
    };

    var checkOwnershipType = function () {
        if ($scope.reservation.selectedOwnershipType != 'Thai Company') {
            delete $scope.reservation.CompanyName;
            delete $scope.reservation.CompanyNameThai;
        }
    };

    var checkReservationType = function () {
        if ($scope.reservation.reservationType != 'agency') {
            delete $scope.reservation.AgencyID;
            delete $scope.reservation.AgencyCommission;
            delete $scope.reservation.AgencyCommissionComment;
        }
    };

    $scope.installments = [];
    $scope.nbInstallment = 1;

    $scope.activeAgency = undefined;
    $scope.activeSalePerson = undefined;
    $scope.activeUnit = undefined;
    $scope.reservationType = 0;

    $scope.furniturePrice = 0;
    $scope.sellingPrice = 0;
    $scope.discountPrice = 0;


    $scope.updateActiveUnit = function () {

        if (parseInt($scope.selectedUnit) === 0
            || parseInt($scope.selectedComplex) === 0
            || parseInt($scope.selectedBuilding) === 0) {
            $scope.activeUnit = undefined;
            return false;
        }

        for (i in $scope.units) {
            if ($scope.units[i].id == $scope.selectedUnit) {
                $scope.activeUnit = $scope.units[i];
                break;
            }
        }

        $scope.sellingPrice = $scope.activeUnit.price;

    }
    $scope.updateActiveSalePerson = function () {
        document.getElementById('errorMsgSalePerson').innerHTML = '';
        if (parseInt($scope.selectedSalePerson) === 0) {
            $scope.activeSalePerson = undefined;
            return false;
        }

        for (var i = 0; i < $scope.salePersons.length; i++) {
            if ($scope.selectedSalePerson == $scope.salePersons[i].ID) {
                $scope.activeSalePerson = $scope.salePersons[i];
                $scope.reservation.ActiveSalePerson = $scope.activeSalePerson;
                break;
            }
        }

    }
    $scope.updateSellingPrice = function () {
        console.log($scope.addFurniturePrice);
        if ($scope.addFurniturePrice) {
            $scope.sellingPrice = $scope.activeUnit.price - $scope.discountPrice + $scope.furniturePrice;
        } else {
            $scope.sellingPrice = $scope.sellingPrice - $scope.discountPrice - $scope.furniturePrice;
        }
    }
    $scope.updateInstallments = function () {
        $scope.installments = [];
        var installment = $scope.sellingPrice / $scope.nbInstallment;
        for (var i = 0; i < $scope.nbInstallment; i++) {
            $scope.installments.push({
                value: installment,
                date: new Date()
            });
        }

    }

    $scope.$watch('sellingPrice', function (newVal, oldVal) {
        if ($scope.activeUnit !== undefined) {
            var discountAmount = $scope.activeUnit.price - newVal;
            if (discountAmount < 0 && !$scope.addFurniturePrice) {
                $scope.sellingPrice = oldVal;
                return;
            }
            $scope.discountPrice = (discountAmount > 0 ? discountAmount : 0);
        }
    });
    $scope.$watch('discountPrice', function (newVal, oldVal) {
        if ($scope.activeUnit !== undefined) {
            var sellingPrice = $scope.activeUnit.price - newVal;
            if (sellingPrice < 0) {
                $scope.discountPrice = oldVal;
                return;
            }
            $scope.sellingPrice = $scope.activeUnit.price - newVal;
        }

    });
}); 