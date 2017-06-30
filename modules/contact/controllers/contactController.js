directPortalApp.controller("contactController", function ($scope, $http, serviceWrapper, complexService, $linq, unitService) {
    serviceWrapper.get('Complex').getAll('', function (response) {
        $scope.complexes = response.data;
    });
    serviceWrapper.get('Building').getAll('', function (response) {
        $scope.buildings = response.data;
    });
    $scope.updateComplex = function (complex) {
        //update Complex Name
        complexService.edit(complex, function (response) {
            console.log(response);
            alert("success");
        });
    }
    $scope.displaybuilding = false;
    $scope.showBuilding = function (complex) {
        console.log(complex.ID);
        $scope.displayFloor = false;
        $scope.displayUnits = false;
        serviceWrapper.get('Building').getAll('', function (response) {
            $scope.buildings = response.data;
            $scope.displaybuilding = true;
            $scope.SelectedBuildings = $linq.Enumerable().From($scope.buildings)
                .Where("x => x['ComplexId']==" + complex.ID)
                .ToArray();
            console.log($scope.SelectedBuildings);
        });
        
    }

    $scope.gPlace;
});

directPortalApp.directive('googleplace', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            var componentForm = {
                street_number: 'short_name',
                route: 'long_name',
                locality: 'long_name',
                administrative_area_level_1: 'short_name',
                country: 'long_name',
                postal_code: 'short_name'
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            //var place = Autocomplete.getPlace();
            google.maps.event.addListener(scope.gPlace, 'place_changed', function () {
                var place = scope.gPlace.getPlace();
                for (var component in componentForm) {
                    document.getElementById(component).value = '';
                    document.getElementById(component).disabled = false;
                }
                // Get each component of the address from the place details
                // and fill the corresponding field on the form.
                for (var i = 0; i < place.address_components.length; i++) {
                    var addressType = place.address_components[i].types[0];
                    if (componentForm[addressType]) {
                        var val = place.address_components[i][componentForm[addressType]];
                        document.getElementById(addressType).value = val;
                    }
                }
                console.log(place);
                scope.$apply(function () {
                    model.$setViewValue(element.val());
                    console.log(element.val());
                });
            });
        }
    };
});

