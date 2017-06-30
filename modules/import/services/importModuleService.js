directPortalApp.factory('importModuleService', function ($http, __env) {
    var importModuleService = {};

    matrixModuleService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?

    }

    importModuleService.importUnits = function (file, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.post(__env.apiUrl + 'api/modules/import/ImportUnits').then(successCallback, errorCallback);
    };


    return matrixModuleService;
});