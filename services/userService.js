directPortalApp.factory('userService', function ($http, __env) {
    var userService = {};

    contractdetailtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
        

    }

    contractdetailtypeService.get = function (successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetailType/' + fields).then(successCallback, errorCallback);
    };

    contractdetailtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContractDetailType/', model).then(successCallback, errorCallback);

    };

    contractdetailtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetailType', model).then(successCallback, errorCallback);
    };

    contractdetailtypeService.delete = function (id, successCallback, errorCallback) {
        $http.get(__env.apiUrl + 'api/ContractDetailType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    return contractdetailtypeService;
});