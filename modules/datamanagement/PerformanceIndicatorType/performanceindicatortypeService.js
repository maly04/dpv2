directPortalApp.factory('performanceindicatortypeService', function ($http, __env) {
    var performanceindicatortypeService = {};

    performanceindicatortypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    performanceindicatortypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Relationships/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Translations/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Notes/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/ByName/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Activate/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Active' + fields).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/' + id + fields).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/' + fields).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PerformanceIndicatorType/', model).then(successCallback, errorCallback);

    };

    performanceindicatortypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PerformanceIndicatorType', model).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PerformanceIndicatorType/ByName', model).then(successCallback, errorCallback);
    };

    return performanceindicatortypeService;
});