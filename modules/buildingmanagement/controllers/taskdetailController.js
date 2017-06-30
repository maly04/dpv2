directPortalApp.controller('taskdetailController', function ($scope, $stateParams) {


    $scope.task = {
        id: $stateParams.taskId,
        Name: 'task 1',
        Description: 'faire la lessive'
    }
    /*
        $http.get('...').then(function(res){
            $scope.task  = res.data
        })
    */

});