directPortalApp.directive('dpContactDetails', function ($http, serviceWrapper, contactDetailsTypeServices, contactdetailService, personService) {

    function link(scope, element, attrs) {

        scope.entity = attrs.dpEntity;
        scope.entityId = attrs.dpEntityId;
        scope.action = attrs.dpAction;
        scope.fields = attrs.dpFields;     
       
    }

    return {
        link: link,
        templateUrl: 'directPortal/directives/dp-contact-details/dp-contact-details.html',      
        controller: function ($scope, $state, serviceWrapper) {
            contactDetailsTypeServices.get(function (response) {
                $scope.contactDetailsType = response.data;
                $scope.contactTypeNames = $scope.contactDetailsType.map(e => e.Name);
            });

            serviceWrapper.get($scope.entity).getContactDetails($scope.entityId, function (response) {
                $scope.getcontactdetails = response.data;
                //console.log($scope.getcontactdetails);
            });

            //When submit form
            $scope.submit = function () {
                //$scope.entity = angular.lowercase($scope.entity);
                $scope.formContactDetailData = $scope.convertContactDetailData($scope.contact);
                contactDetailsTypeServices.create($scope.entityId, $scope.entity, $scope.formContactDetailData, function (respon) {
                    console.log(respon);
                }, function (errors) {
                    console.log(errors);
                });               
            };
            $scope.convertContactDetailData = function (contactDetailArrayJsonObj) {
                for (var i = 0; i < contactDetailArrayJsonObj.length; i++) {
                    //Remove id, $$hashKey from array object
                    delete contactDetailArrayJsonObj[i].id;
                    delete contactDetailArrayJsonObj[i].$$hashKey;
                }
                return JSON.stringify(contactDetailArrayJsonObj);
            };

            //Click on add button to append more element
            $scope.contact = [{ id: 'c1' }];
            if ($scope.contact.length == 1) {
                $scope.remove = true;
            }
            $scope.addMoreContactDetails = function () {
                var newItemNo = $scope.contact.length + 1;
                $scope.contact.push({ 'id': 'c' + newItemNo });
                if ($scope.contact.length != 1) {
                    $scope.remove = false;
                }
                console.log($scope.contact);
            };            
            $scope.removeContact = function () {
                var lastItem = $scope.contact.length - 1;
                $scope.contact.splice(lastItem);
                if ($scope.contact.length == 1) {
                    $scope.remove = true;
                }   
            };
        },
        scope: {
            action: '@dpAction',
            entity: '@dpEntity',
            entityId: '@dpEntityId'

        }
    };
    
});