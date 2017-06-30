directPortalApp.directive('dpContactAddresses', function ($http, serviceWrapper, contactAddressesServices, contactaddresstypeService, countryService) {
    function link(scope, element, attrs) {

        scope.entity = attrs.dpEntity;
        scope.entityId = attrs.dpEntityId;
        scope.action = attrs.dpAction;
        scope.fields = attrs.dpFields;   

    }

    return {
        link: link,
        templateUrl: 'directPortal/directives/dp-contact-addresses/dp-contact-addresses.html',
        controller: function ($scope, $state, serviceWrapper) {
            contactAddressesServices.get(function (response) {
                $scope.contactAddressesType = response.data;
                $scope.contactAddressesTypeNames = $scope.contactAddressesType.map(e => e.Name);
            });
            serviceWrapper.get($scope.entity).getContactAddresses($scope.entityId, function (response) {
                $scope.getcontactaddresses = response.data;
                //console.log($scope.getcontactaddresses);
            });
            //Get Country
            countryService.getAll('', function (response) {
                console.log(response.data);
                $scope.countries = response.data;
            });

            $scope.submit = function () {
                $scope.formContactAddressesData = $scope.convertContactAddressData($scope.contactAddresses);
                contactAddressesServices.create($scope.entityId, $scope.entity, $scope.formContactAddressesData, function (respon) {
                    console.log(respon);
                }, function (errors) {
                    console.log(errors);
                });
            }
            $scope.convertContactAddressData = function (contactAddressesArrayJsonObj) {
                for (var i = 0; i < contactAddressesArrayJsonObj.length; i++) {
                    //Remove id, $$hashKey from array object
                    delete contactAddressesArrayJsonObj[i].id;
                    delete contactAddressesArrayJsonObj[i].$$hashKey;
                }
                return JSON.stringify(contactAddressesArrayJsonObj);
            };

            //Click on add button to append more element
            $scope.contactAddresses = [{ id: 'addresse1' }];
            if ($scope.contactAddresses.length == 1) {
                $scope.remove = true;
            }
            $scope.addMoreContactDetails = function () {
                var newItemNo = $scope.contactAddresses.length + 1;
                $scope.contactAddresses.push({ 'id': 'addresse' + newItemNo });
                if ($scope.contactAddresses.length != 1) {
                    $scope.remove = false;
                }
                console.log($scope.contact);
            };
            $scope.removeContact = function () {
                var lastItem = $scope.contactAddresses.length - 1;
                $scope.contactAddresses.splice(lastItem);
                if ($scope.contactAddresses.length == 1) {
                    $scope.remove = true;
                }
            };
        },
        scope: {
            action: '@dpAction',
            entity: '@dpEntity',
            entityId: '@dpEntityId'
        }
    }
});