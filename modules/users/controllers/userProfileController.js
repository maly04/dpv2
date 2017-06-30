directPortalApp.controller("userProfileController", function ($scope, $stateParams, usersModuleService, persontypeService) {


    usersModuleService.getById($stateParams.id, function (response) {
        $scope.userProfile = response.data;
        console.log($scope.userProfile);

        persontypeService.get($scope.userProfile.TypeId, function (response) {
            $scope.userType = response.data[0].Name;
        });
    });

});