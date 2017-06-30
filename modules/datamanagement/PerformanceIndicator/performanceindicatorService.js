directPortalApp.factory('performanceindicatorService', function ($http, __env) {
    var performanceindicatorService = {};

    performanceindicatorService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    performanceindicatorService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Relationships/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Translations/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Notes/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/ByName/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Activate/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Deactivate/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Active' + fields).then(successCallback, errorCallback);
    };

    performanceindicatorService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicator/' + id + fields).then(successCallback, errorCallback);
    };

    performanceindicatorService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicator/' + fields).then(successCallback, errorCallback);
    };

    performanceindicatorService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PerformanceIndicator/', model).then(successCallback, errorCallback);

    };

    performanceindicatorService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PerformanceIndicator', model).then(successCallback, errorCallback);
    };

    performanceindicatorService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PerformanceIndicator/ByName', model).then(successCallback, errorCallback);
    };

    return performanceindicatorService;
});