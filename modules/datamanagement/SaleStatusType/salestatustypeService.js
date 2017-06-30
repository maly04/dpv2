directPortalApp.factory('salestatustypeService', function ($http, __env) {
    var salestatustypeService = {};

    salestatustypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    salestatustypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Relationships/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Translations/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Notes/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/ByName/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Activate/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatusType/Active' + fields).then(successCallback, errorCallback);
    };

    salestatustypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatusType/' + id + fields).then(successCallback, errorCallback);
    };

    salestatustypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatusType/' + fields).then(successCallback, errorCallback);
    };

    salestatustypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/SaleStatusType/', model).then(successCallback, errorCallback);

    };

    salestatustypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SaleStatusType', model).then(successCallback, errorCallback);
    };

    salestatustypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SaleStatusType/ByName', model).then(successCallback, errorCallback);
    };

    return salestatustypeService;
});