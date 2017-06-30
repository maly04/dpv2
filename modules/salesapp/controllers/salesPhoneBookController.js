directPortalApp.controller("salesPhoneBookController", function ($scope, $stateParams, $state, phonebookModuleService) {

       phonebookModuleService.get(function (response) {
           $scope.persons = response.data.Contacts;
           console.log($scope.persons);
       });

});