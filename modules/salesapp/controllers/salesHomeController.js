directPortalApp.controller("salesHomeController", function ($scope, $stateParams, configurationService) {
    configurationService.getByName('Hotline', function (response) {
        $scope.hotline = response.data.Description;
    });
});