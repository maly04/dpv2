directPortalApp.factory('salesrequesttypeService', function ($http, __env) {
    var salesrequesttypeService = {};

    salesrequesttypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    salesrequesttypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Relationships/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Translations/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Notes/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/ByName/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Activate/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequestType/Active' + fields).then(successCallback, errorCallback);
    };

    salesrequesttypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequestType/' + id + fields).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequestType/' + fields).then(successCallback, errorCallback);
    };

    salesrequesttypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/SalesRequestType/', model).then(successCallback, errorCallback);

    };

    salesrequesttypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SalesRequestType', model).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SalesRequestType/ByName', model).then(successCallback, errorCallback);
    };

    return salesrequesttypeService;
});