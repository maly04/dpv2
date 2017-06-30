directPortalApp.factory('matrixModuleService', function ($http, __env) {
    var matrixModuleService = {};

    matrixModuleService.defaultErrorHandler = function(response){
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?

    }

    matrixModuleService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/modules/matrix/GetBuildingMatrix/' + id).then(successCallback, errorCallback);
    };

    matrixModuleService.getForUnit = function (buildingId, unitId, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/modules/matrix/GetUnitMatrix/' + buildingId + '/' + unitId).then(successCallback, errorCallback);
    };

    return matrixModuleService;
});