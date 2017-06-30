directPortalApp.factory('salesrequestService', function ($http, __env) {
    var salesrequestService = {};

    salesrequestService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    salesrequestService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Relationships/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Translations/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Notes/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/ByName/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Activate/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Deactivate/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequest/Active' + fields).then(successCallback, errorCallback);
    };

    salesrequestService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequest/' + id + fields).then(successCallback, errorCallback);
    };

    salesrequestService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequest/' + fields).then(successCallback, errorCallback);
    };

    salesrequestService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/SalesRequest/', model).then(successCallback, errorCallback);

    };

    salesrequestService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SalesRequest', model).then(successCallback, errorCallback);
    };

    salesrequestService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SalesRequest/ByName', model).then(successCallback, errorCallback);
    };

    return salesrequestService;
});